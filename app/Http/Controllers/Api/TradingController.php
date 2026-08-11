<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserExchangeKey;
use App\Services\BinanceService;
use Illuminate\Support\Facades\Crypt;

class TradingController extends Controller
{
    protected $binanceService;

    public function __construct(BinanceService $binanceService)
    {
        $this->binanceService = $binanceService;
    }

    /**
     * Get User Binance API Keys
     */
    public function getKeys(Request $request)
    {
        $keys = UserExchangeKey::where('user_id', $request->user()->id)
            ->where('exchange', 'binance')
            ->first();

        if ($keys) {
            return response()->json([
                'api_key' => substr($keys->api_key, 0, 8) . '***',
                'has_secret' => true
            ]);
        }

        return response()->json(null);
    }

    /**
     * Save Binance API Keys
     */
    public function saveKeys(Request $request)
    {
        $request->validate([
            'api_key' => 'required|string',
            'api_secret' => 'required|string',
        ]);

        $user = $request->user();

        // Check limit: Maximum 1 API key for users on the 'Free' tier
        if ($user->tier === 'Free') {
            $keyCount = UserExchangeKey::where('user_id', $user->id)->count();
            // If they already have 1 key and are trying to add a new exchange (not updating the existing one)
            $existingKey = UserExchangeKey::where('user_id', $user->id)->where('exchange', 'binance')->first();
            
            if ($keyCount >= 1 && !$existingKey) {
                return response()->json(['message' => 'Достигнут лимит API-ключей для вашего тарифа (макс. 1). Пожалуйста, приобретите подписку.'], 403);
            }
        }

        UserExchangeKey::updateOrCreate(
            ['user_id' => $user->id, 'exchange' => 'binance'],
            [
                'api_key' => $request->api_key,
                'api_secret' => Crypt::encryptString($request->api_secret),
            ]
        );

        return response()->json(['success' => true, 'message' => 'API Keys saved successfully']);
    }

    /**
     * Fetch user balance from Binance
     */
    public function getBalance(Request $request)
    {
        $user = $request->user();
        $keys = UserExchangeKey::where('user_id', $user->id)->where('exchange', 'binance')->first();

        if (!$keys) {
            return response()->json(['error' => 'API keys not found'], 404);
        }

        try {
            $apiSecret = Crypt::decryptString($keys->api_secret);
            $account = $this->binanceService->getAccount($keys->api_key, $apiSecret);
            
            // Filter non-zero balances
            $balances = array_filter($account['balances'], function($balance) {
                return (float)$balance['free'] > 0 || (float)$balance['locked'] > 0;
            });

            return response()->json(array_values($balances));
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Place a test order
     */
    public function placeOrder(Request $request)
    {
        $request->validate([
            'symbol' => 'required|string',
            'side' => 'required|string|in:BUY,SELL',
            'quantity' => 'required|numeric',
        ]);

        $user = $request->user();
        $keys = UserExchangeKey::where('user_id', $user->id)->where('exchange', 'binance')->first();

        if (!$keys) {
            return response()->json(['error' => 'API keys not found'], 404);
        }

        try {
            $apiSecret = Crypt::decryptString($keys->api_secret);
            $order = $this->binanceService->placeMarketOrder(
                $keys->api_key,
                $apiSecret,
                $request->symbol,
                $request->side,
                $request->quantity
            );
            return response()->json(['success' => true, 'order' => $order]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
