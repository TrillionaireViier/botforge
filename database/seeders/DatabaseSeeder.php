<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $admin = \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('admin123'),
            'role' => 'admin',
            'balance' => 99999.99,
            'tier' => 'Pro',
            'status' => 'Active',
        ]);

        $user = \App\Models\User::factory()->create([
            'name' => 'Demo User',
            'email' => 'user@example.com',
            'password' => bcrypt('user123'),
            'role' => 'user',
            'balance' => 5000.00,
            'tier' => 'Free',
            'status' => 'Active',
        ]);

        $bot1 = \App\Models\Bot::create([
            'name' => 'ETH Scalper',
            'description' => 'Fast scalping on ETH/USDT',
            'strategy' => 'MA Crossover',
            'roi' => 12.5,
            'risk' => 'High',
            'status' => 'Active',
        ]);

        $bot2 = \App\Models\Bot::create([
            'name' => 'BTC DCA',
            'description' => 'DCA strategy for BTC/USDT',
            'strategy' => 'DCA',
            'roi' => 5.2,
            'risk' => 'Low',
            'status' => 'Active',
        ]);

        \App\Models\Trade::create([
            'user_id' => $user->id,
            'bot_id' => $bot1->id,
            'pair' => 'ETH/USDT',
            'type' => 'buy',
            'amount' => 1.5,
            'price' => 3000.00,
            'profit' => 15.50,
            'status' => 'Closed'
        ]);

        \App\Models\Trade::create([
            'user_id' => $user->id,
            'bot_id' => $bot2->id,
            'pair' => 'BTC/USDT',
            'type' => 'sell',
            'amount' => 0.1,
            'price' => 60000.00,
            'profit' => 5.20,
            'status' => 'Closed'
        ]);

        \App\Models\SupportTicket::create([
            'user_id' => $user->id,
            'subject' => 'Bot not executing trades',
            'status' => 'Open',
            'priority' => 'High',
            'message' => 'My ETH scalper is not executing trades, please help.'
        ]);

        // Stage 2 Seeders
        \App\Models\Setting::create([
            'key' => 'trading_fee',
            'value' => '0.1',
            'type' => 'percentage',
            'description' => 'Global trading fee applied to profitable trades'
        ]);
        
        \App\Models\Setting::create([
            'key' => 'maintenance_mode',
            'value' => 'false',
            'type' => 'boolean',
            'description' => 'Enable maintenance mode across the platform'
        ]);

        \App\Models\Integration::create([
            'name' => 'Binance API',
            'type' => 'exchange',
            'status' => 'active',
            'api_key' => 'binance_test_key_123',
            'webhook_url' => 'https://api.binance.com'
        ]);

        \App\Models\Integration::create([
            'name' => 'Telegram Bot',
            'type' => 'notification',
            'status' => 'inactive',
            'api_key' => 'tg_bot_token_abc',
            'webhook_url' => null
        ]);

        \App\Models\Payout::create([
            'user_id' => $user->id,
            'amount' => 500.00,
            'method' => 'USDT (TRC20)',
            'status' => 'pending'
        ]);

        // Stage 3 Seeders
        \App\Models\Lead::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'status' => 'New',
            'value' => 1500.00,
            'source' => 'Google Ads'
        ]);
        
        \App\Models\Lead::create([
            'name' => 'Alice Smith',
            'email' => 'alice@example.com',
            'status' => 'Contacted',
            'value' => 300.00,
            'source' => 'Organic Search'
        ]);

        \App\Models\Article::create([
            'title' => 'How to build a Trading Bot',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
            'type' => 'blog',
            'author' => 'Admin User',
            'status' => 'published',
            'views' => 1250
        ]);

        \App\Models\Article::create([
            'title' => 'Platform Update v2.0',
            'content' => 'We have released a new version of our trading platform with enhanced features and better performance.',
            'type' => 'news',
            'author' => 'System',
            'status' => 'published',
            'views' => 4500
        ]);

        \App\Models\Promocode::create([
            'code' => 'WELCOME50',
            'discount_type' => 'percentage',
            'discount_value' => 50.00,
            'max_uses' => 1000,
            'used' => 150,
            'status' => 'active',
            'expires_at' => now()->addDays(30)
        ]);

        \App\Models\Promocode::create([
            'code' => 'BLACKFRIDAY',
            'discount_type' => 'percentage',
            'discount_value' => 30.00,
            'max_uses' => 500,
            'used' => 500,
            'status' => 'expired',
            'expires_at' => now()->subDays(10)
        ]);
    }
}
