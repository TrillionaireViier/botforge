<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // HACK for demo without a database on Vercel
        if ($request->email === 'admin@example.com' && $request->password === 'admin123') {
            return response()->json([
                'user' => ['id' => 1, 'name' => 'Admin User', 'email' => 'admin@example.com', 'role' => 'admin'],
                'token' => 'fake_admin_token_123'
            ]);
        }
        
        if ($request->email === 'user@example.com' && $request->password === 'user123') {
            return response()->json([
                'user' => ['id' => 2, 'name' => 'Demo User', 'email' => 'user@example.com', 'role' => 'user'],
                'token' => 'fake_user_token_123'
            ]);
        }

        try {
            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json(['message' => 'Invalid credentials'], 401);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Database connection failed. Please configure DB on Vercel.'], 500);
        }

        // The frontend expects a role to redirect properly
        $user->role = $user->email === 'admin@example.com' ? 'admin' : 'user';

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => explode('@', $request->email)[0],
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json(['message' => 'User created successfully']);
    }
}
