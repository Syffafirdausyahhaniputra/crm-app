<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'no_telf',
        'alamat',
        'kecamatan',
        'kota',
        'provinsi',
        'email',
        'jumlah_transaksi',
    ];
}
