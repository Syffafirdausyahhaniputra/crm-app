<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('no_telf'); // Nomor WA
            $table->text('alamat');
            $table->string('kecamatan'); // Kecamatan
            $table->string('kota');     // Kota
            $table->string('provinsi'); // Provinsi
            $table->string('email')->unique();
            $table->unsignedInteger('jumlah_transaksi')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
