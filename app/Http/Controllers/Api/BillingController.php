<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use App\Models\Payment;

class BillingController extends Controller
{
    /**
     * Create a payment invoice for Cryptomus
     */
    public function payWithCryptomus(Request $request)
    {
        $user = $request->user();
        $orderId = uniqid('order_');
        $amount = 10.00;

        Payment::create([
            'user_id' => $user->id,
            'order_id' => $orderId,
            'provider' => 'cryptomus',
            'amount' => $amount,
            'status' => 'pending'
        ]);

        $merchantId = env('CRYPTOMUS_MERCHANT_ID', '');
        $apiKey = env('CRYPTOMUS_API_KEY', '');

        if (!$merchantId || !$apiKey) {
            Log::warning("Cryptomus API keys are not set. Using mock URL.");
            return response()->json([
                'success' => true,
                'payment_url' => "https://pay.cryptomus.com/test_{$orderId}",
                'order_id' => $orderId
            ]);
        }

        $payload = [
            'amount' => (string)$amount,
            'currency' => 'USD',
            'order_id' => $orderId,
            'url_callback' => url('/api/webhooks/cryptomus'),
            'url_return' => url('/app/user'),
            'is_payment_multiple' => false,
            'lifetime' => 3600,
        ];

        $payloadBase64 = base64_encode(json_encode($payload));
        $signature = md5($payloadBase64 . $apiKey);

        try {
            $response = Http::withHeaders([
                'merchant' => $merchantId,
                'sign' => $signature,
                'Content-Type' => 'application/json'
            ])->post('https://api.cryptomus.com/v1/payment', $payload);

            if ($response->successful()) {
                $data = $response->json();
                return response()->json([
                    'success' => true,
                    'payment_url' => $data['result']['url'],
                    'order_id' => $orderId
                ]);
            }

            Log::error("Cryptomus API Error: " . $response->body());
            return response()->json(['success' => false, 'message' => 'Failed to create Cryptomus invoice'], 500);

        } catch (\Exception $e) {
            Log::error("Cryptomus Request Failed: " . $e->getMessage());
            return response()->json(['success' => false, 'message' => 'Network error'], 500);
        }
    }

    /**
     * Create a payment invoice for WhiteBIT Pay
     */
    public function payWithWhitebit(Request $request)
    {
        $user = $request->user();
        $orderId = uniqid('order_');
        $amount = 10.00;

        Payment::create([
            'user_id' => $user->id,
            'order_id' => $orderId,
            'provider' => 'whitebit',
            'amount' => $amount,
            'status' => 'pending'
        ]);

        $publicKey = env('WHITEBIT_PUBLIC_KEY', '');
        $privateKey = env('WHITEBIT_PRIVATE_KEY', '');

        if (!$publicKey || !$privateKey) {
            Log::warning("WhiteBIT API keys are not set. Using mock URL.");
            return response()->json([
                'success' => true,
                'payment_url' => "https://pay.whitebit.com/test_{$orderId}",
                'order_id' => $orderId
            ]);
        }

        $payload = [
            'amount' => (string)$amount,
            'currency' => 'USD',
            'order_id' => $orderId,
            'return_url' => url('/app/user'),
            'webhook_url' => url('/api/webhooks/whitebit'),
        ];

        // Example signature for WhiteBIT
        $payloadBase64 = base64_encode(json_encode($payload));
        $signature = hash_hmac('sha512', $payloadBase64, $privateKey);

        try {
            $response = Http::withHeaders([
                'X-API-KEY' => $publicKey,
                'X-API-PAYLOAD' => $payloadBase64,
                'X-API-SIGNATURE' => $signature,
                'Content-Type' => 'application/json'
            ])->post('https://pay.whitebit.com/api/v1/pay/order', $payload);

            if ($response->successful()) {
                $data = $response->json();
                return response()->json([
                    'success' => true,
                    'payment_url' => $data['payment_url'] ?? $data['url'] ?? "https://pay.whitebit.com/test_{$orderId}",
                    'order_id' => $orderId
                ]);
            }

            Log::error("WhiteBIT API Error: " . $response->body());
            return response()->json(['success' => false, 'message' => 'Failed to create WhiteBIT invoice'], 500);

        } catch (\Exception $e) {
            Log::error("WhiteBIT Request Failed: " . $e->getMessage());
            return response()->json(['success' => false, 'message' => 'Network error'], 500);
        }
    }

    /**
     * Create a payment invoice for NOWPayments
     */
    public function payWithNowpayments(Request $request)
    {
        $user = $request->user();
        $orderId = uniqid('order_');
        $amount = 10.00;

        Payment::create([
            'user_id' => $user->id,
            'order_id' => $orderId,
            'provider' => 'nowpayments',
            'amount' => $amount,
            'status' => 'pending'
        ]);

        $apiKey = env('NOWPAYMENTS_API_KEY', '');

        if (!$apiKey) {
            Log::warning("NOWPayments API key is not set. Using mock URL.");
            return response()->json([
                'success' => true,
                'payment_url' => "https://nowpayments.io/payment/?iid=test_{$orderId}",
                'order_id' => $orderId
            ]);
        }

        $payload = [
            'price_amount' => $amount,
            'price_currency' => 'usd',
            'order_id' => $orderId,
            'success_url' => url('/app/user'),
            'cancel_url' => url('/app/user/pricing'),
            'ipn_callback_url' => url('/api/webhooks/nowpayments'),
        ];

        try {
            $response = Http::withHeaders([
                'x-api-key' => $apiKey,
                'Content-Type' => 'application/json'
            ])->post('https://api.nowpayments.io/v1/invoice', $payload);

            if ($response->successful()) {
                $data = $response->json();
                return response()->json([
                    'success' => true,
                    'payment_url' => $data['invoice_url'],
                    'order_id' => $orderId
                ]);
            }

            Log::error("NOWPayments API Error: " . $response->body());
            return response()->json(['success' => false, 'message' => 'Failed to create NOWPayments invoice'], 500);

        } catch (\Exception $e) {
            Log::error("NOWPayments Request Failed: " . $e->getMessage());
            return response()->json(['success' => false, 'message' => 'Network error'], 500);
        }
    }
}
