<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CustomerSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('id_ID'); // Lokal Indonesia

        foreach (range(1, 5) as $i) {
            Customer::create([
                'nama' => $faker->name,
                'no_telf' => '08' . $faker->numerify('##########'),
                'alamat' => $faker->address,
                'kecamatan' => $faker->citySuffix,
                'kota' => $faker->city,
                'provinsi' => $faker->state,
                'email' => $faker->unique()->safeEmail,
                'jumlah_transaksi' => $faker->numberBetween(0, 50),
            ]);
        }
    }
}
