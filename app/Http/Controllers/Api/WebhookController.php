<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Payment;
use App\Models\User;

class WebhookController extends Controller
{
    /**
     * Handle Cryptomus Webhook
     */
    public function cryptomusWebhook(Request $request)
    {
        $payload = $request->all();
        Log::info('Cryptomus Webhook received: ', $payload);

        $apiKey = env('CRYPTOMUS_API_KEY', '');
        $sign = $request->header('sign');

        if (!$apiKey || !$sign) {
            Log::error('Cryptomus Webhook: Missing API key or signature header');
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Validate signature
        $data = $payload;
        unset($data['sign']); // Just in case it's in the body
        
        $payloadBase64 = base64_encode(json_encode($data, JSON_UNESCAPED_UNICODE));
        $expectedSign = md5($payloadBase64 . $apiKey);

        if ($sign !== $expectedSign) {
            Log::error('Cryptomus Webhook: Invalid signature');
            return response()->json(['message' => 'Invalid signature'], 401);
        }

        // Check if status is paid
        if (in_array($payload['status'], ['paid', 'paid_over'])) {
            $this->processSuccessfulPayment($payload['order_id'], 'cryptomus');
        }

        return response()->json(['message' => 'OK']);
    }

    /**
     * Handle WhiteBIT Pay Webhook
     */
    public function whitebitWebhook(Request $request)
    {
        $payload = $request->getContent();
        Log::info('WhiteBIT Webhook received: ' . $payload);

        $privateKey = env('WHITEBIT_PRIVATE_KEY', '');
        $sign = $request->header('X-API-SIGNATURE');
        
        if (!$privateKey || !$sign) {
            Log::error('WhiteBIT Webhook: Missing Private key or signature header');
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $payloadBase64 = base64_encode($payload);
        $expectedSign = hash_hmac('sha512', $payloadBase64, $privateKey);

        if ($sign !== $expectedSign) {
            Log::error('WhiteBIT Webhook: Invalid signature');
            return response()->json(['message' => 'Invalid signature'], 401);
        }

        $data = json_decode($payload, true);

        // Assuming status 2 or 'successful' means paid in WhiteBIT Pay
        // You may need to adjust this according to WhiteBIT's exact status codes
        if (isset($data['status']) && ($data['status'] === 'SUCCESS' || $data['status'] === 2)) {
            $this->processSuccessfulPayment($data['order_id'], 'whitebit');
        }

        return response()->json(['message' => 'OK']);
    }

    /**
     * Handle NOWPayments Webhook
     */
    public function nowpaymentsWebhook(Request $request)
    {
        $payload = $request->all();
        Log::info('NOWPayments Webhook received: ', $payload);

        $ipnSecret = env('NOWPAYMENTS_IPN_SECRET', '');
        $sign = $request->header('x-nowpayments-sig');

        if (!$ipnSecret || !$sign) {
            Log::error('NOWPayments Webhook: Missing IPN Secret or signature header');
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        ksort($payload);
        $sortedData = json_encode($payload);
        $expectedSign = hash_hmac('sha512', $sortedData, $ipnSecret);

        if ($sign !== $expectedSign) {
            Log::error('NOWPayments Webhook: Invalid signature');
            return response()->json(['message' => 'Invalid signature'], 401);
        }

        if (isset($payload['payment_status']) && $payload['payment_status'] === 'finished') {
            $this->processSuccessfulPayment($payload['order_id'], 'nowpayments');
        }

        return response()->json(['message' => 'OK']);
    }

    /**
     * Process successful payment and activate trial or subscription
     */
    private function processSuccessfulPayment($orderId, $provider)
    {
        $payment = Payment::where('order_id', $orderId)
            ->where('provider', $provider)
            ->where('status', 'pending')
            ->first();

        if ($payment) {
            $payment->update(['status' => 'paid']);

            $user = User::find($payment->user_id);
            if ($user) {
                // Determine plan from orderId prefix (e.g., 'pro_12345', 'ultra_12345', 'trial_12345')
                $plan = 'trial';
                if (str_starts_with($orderId, 'pro_')) $plan = 'pro';
                if (str_starts_with($orderId, 'ultra_')) $plan = 'ultra';
                if (str_starts_with($orderId, 'trial_')) $plan = 'trial';
                
                if ($plan === 'trial') {
                    $user->tier = 'Pro'; // Trial gives Pro features
                    $currentEnd = $user->trial_ends_at && new \DateTime($user->trial_ends_at) > now() 
                        ? new \Carbon\Carbon($user->trial_ends_at) 
                        : now();
                    $user->trial_ends_at = $currentEnd->addDays(7);
                    Log::info("Activated 7-day trial subscription for user {$user->id} via {$provider}");
                } else if ($plan === 'pro') {
                    $user->tier = 'Pro';
                    Log::info("Activated Pro subscription for user {$user->id} via {$provider}");
                } else if ($plan === 'ultra') {
                    $user->tier = 'Ultra';
                    Log::info("Activated Ultra subscription for user {$user->id} via {$provider}");
                }
                
                $user->save();
            }
        } else {
            Log::warning("Webhook received for unknown or already processed order: {$orderId} via {$provider}");
        }
    }
}
