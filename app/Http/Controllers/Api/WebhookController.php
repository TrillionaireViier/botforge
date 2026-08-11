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
     * Process successful payment and activate trial
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
                // If trial already active, extend it. Otherwise, set it from now.
                $currentEnd = $user->trial_ends_at && new \DateTime($user->trial_ends_at) > now() 
                    ? new \Carbon\Carbon($user->trial_ends_at) 
                    : now();
                
                $user->trial_ends_at = $currentEnd->addDays(7);
                $user->save();

                Log::info("Activated 7-day subscription for user {$user->id} via {$provider} (Order: {$orderId})");
            }
        } else {
            Log::warning("Webhook received for unknown or already processed order: {$orderId} via {$provider}");
        }
    }
}
