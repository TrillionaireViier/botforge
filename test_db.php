<?php
require 'vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;

config(['database.connections.pgsql' => [
    'driver' => 'pgsql',
    'url' => env('DATABASE_URL'),
    'host' => 'ep-fragrant-band-afo098g1-pooler.c-2.us-west-2.aws.neon.tech',
    'port' => '5432',
    'database' => 'neondb',
    'username' => 'neondb_owner',
    'password' => 'npg_9SVAZh6YJxIG',
    'charset' => 'utf8',
    'prefix' => '',
    'prefix_indexes' => true,
    'search_path' => 'public',
    'sslmode' => 'require',
]]);

try {
    DB::connection('pgsql')->transaction(function () {
        try {
            $pdo = DB::connection('pgsql')->getPdo();
            $stmt = $pdo->prepare('create table "users" ("id" bigserial not null primary key, "name" varchar(255) not null, "email" varchar(255) not null, "email_verified_at" timestamp(0) without time zone null, "password" varchar(255) not null, "role" varchar(255) not null default \'user\', "balance" decimal(15, 2) not null default \'0\', "tier" varchar(255) not null default \'Free\', "status" varchar(255) not null default \'Active\', "remember_token" varchar(100) null, "created_at" timestamp(0) without time zone null, "updated_at" timestamp(0) without time zone null)');
            $res = $stmt->execute();
            echo "Table created res: " . var_export($res, true) . "\n";
            echo "PDO Error: " . var_export($stmt->errorInfo(), true) . "\n";
        } catch (\Exception $e) {
            echo "Table creation exception: " . $e->getMessage() . "\n";
        }

        try {
            $stmt = $pdo->prepare('alter table "users" add constraint "users_email_unique" unique ("email")');
            $res = $stmt->execute();
            echo "Constraint res: " . var_export($res, true) . "\n";
            echo "PDO Error: " . var_export($stmt->errorInfo(), true) . "\n";
        } catch (\Exception $e) {
            echo "Constraint exception: " . $e->getMessage() . "\n";
        }
    });
} catch (\Exception $e) {
    echo "Transaction failed: " . $e->getMessage() . "\n";
}
