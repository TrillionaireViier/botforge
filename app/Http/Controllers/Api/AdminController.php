<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getUsers()
    {
        return response()->json(\App\Models\User::withCount(['trades'])->get());
    }

    public function getBots()
    {
        return response()->json(\App\Models\Bot::all());
    }

    public function getTrades()
    {
        // Include related user and bot
        $trades = \App\Models\Trade::with(['user', 'bot'])->get();
        return response()->json($trades);
    }

    public function getTickets()
    {
        $tickets = \App\Models\SupportTicket::with('user')->get();
        return response()->json($tickets);
    }

    public function getSettings()
    {
        return response()->json(\App\Models\Setting::all());
    }

    public function updateSettings(Request $request)
    {
        foreach ($request->all() as $key => $value) {
            \App\Models\Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }
        return response()->json(['success' => true]);
    }

    public function getIntegrations()
    {
        return response()->json(\App\Models\Integration::all());
    }

    public function getPayouts()
    {
        $payouts = \App\Models\Payout::with('user')->get();
        return response()->json($payouts);
    }

    public function getLeads()
    {
        return response()->json(\App\Models\Lead::all());
    }

    public function getArticles()
    {
        return response()->json(\App\Models\Article::all());
    }

    public function getPromocodes()
    {
        return response()->json(\App\Models\Promocode::all());
    }
}
