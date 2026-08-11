<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class BinanceService
{
    protected $baseUrl = 'https://testnet.binance.vision/api/v3';

    /**
     * Send a signed request to Binance API
     */
    protected function sendSignedRequest($method, $endpoint, $apiKey, $apiSecret, $params = [])
    {
        $params['timestamp'] = (int) (microtime(true) * 1000);
        $queryString = http_build_query($params);
        $signature = hash_hmac('sha256', $queryString, $apiSecret);
        $params['signature'] = $signature;

        $url = $this->baseUrl . $endpoint;

        $response = Http::withHeaders([
            'X-MBX-APIKEY' => $apiKey
        ])->$method($url, $params);

        if (!$response->successful()) {
            Log::error("Binance API Error", ['status' => $response->status(), 'body' => $response->body()]);
            throw new \Exception("Binance API request failed: " . $response->body());
        }

        return $response->json();
    }

    /**
     * Fetch user balances
     */
    public function getAccount($apiKey, $apiSecret)
    {
        return $this->sendSignedRequest('get', '/account', $apiKey, $apiSecret);
    }

    /**
     * Place a market order
     */
    public function placeMarketOrder($apiKey, $apiSecret, $symbol, $side, $quantity)
    {
        $params = [
            'symbol' => strtoupper($symbol),
            'side' => strtoupper($side), // BUY or SELL
            'type' => 'MARKET',
            'quantity' => $quantity
        ];

        return $this->sendSignedRequest('post', '/order', $apiKey, $apiSecret, $params);
    }
}