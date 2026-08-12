<?php

// Fix for Vercel's vercel-php builder which sets SCRIPT_NAME to /api/index.php.
// This causes Laravel (Symfony Request) to incorrectly strip /api from the pathInfo,
// resulting in 405 Method Not Allowed because it matches the web fallback route.
$_SERVER['SCRIPT_NAME'] = '/index.php';
$_SERVER['SCRIPT_FILENAME'] = __DIR__ . '/../public/index.php';

// Vercel strips the /api/ prefix from the request path when routing to api/index.php.
// We need to restore it so Laravel's router correctly matches routes/api.php.
if (isset($_SERVER['REQUEST_URI']) && str_starts_with($_SERVER['REQUEST_URI'], '/') && !str_starts_with($_SERVER['REQUEST_URI'], '/api/')) {
    $_SERVER['REQUEST_URI'] = '/api' . $_SERVER['REQUEST_URI'];
}

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
