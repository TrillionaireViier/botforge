<?php

// Force HTTPS environment variables for Vercel Serverless runtime
$_SERVER['HTTPS'] = 'on';
$_SERVER['SERVER_PORT'] = 443;
if (!isset($_SERVER['HTTP_X_FORWARDED_PROTO'])) {
    $_SERVER['HTTP_X_FORWARDED_PROTO'] = 'https';
}

// Fix for Vercel's vercel-php builder which sets SCRIPT_NAME to /api/index.php.
// This causes Laravel (Symfony Request) to incorrectly strip /api from the pathInfo,
// resulting in 405 Method Not Allowed because it matches the web fallback route.
$_SERVER['SCRIPT_NAME'] = '/index.php';
$_SERVER['SCRIPT_FILENAME'] = __DIR__ . '/../public/index.php';

// Ensure Authorization header is available for Sanctum
if (!isset($_SERVER['HTTP_AUTHORIZATION'])) {
    if (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $_SERVER['HTTP_AUTHORIZATION'] = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    } elseif (function_exists('getallheaders')) {
        $headers = getallheaders();
        if (isset($headers['Authorization'])) {
            $_SERVER['HTTP_AUTHORIZATION'] = $headers['Authorization'];
        } elseif (isset($headers['authorization'])) {
            $_SERVER['HTTP_AUTHORIZATION'] = $headers['authorization'];
        }
    }
}

require __DIR__ . '/../public/index.php';
