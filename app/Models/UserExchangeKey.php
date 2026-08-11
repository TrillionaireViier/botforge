<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserExchangeKey extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'exchange', 'api_key', 'api_secret'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
