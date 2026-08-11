<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promocode extends Model
{
    use HasFactory;
    protected $fillable = ['code', 'discount_type', 'discount_value', 'max_uses', 'used', 'status', 'expires_at'];
}
