<?php

// Vercel strips the /api/ prefix from the request path when routing to api/index.php.
// We need to restore it so Laravel's router correctly matches routes/api.php.
if (isset($_SERVER['REQUEST_URI']) && str_starts_with($_SERVER['REQUEST_URI'], '/') && !str_starts_with($_SERVER['REQUEST_URI'], '/api/')) {
    $_SERVER['REQUEST_URI'] = '/api' . $_SERVER['REQUEST_URI'];
}

require __DIR__ . '/../public/index.php';
