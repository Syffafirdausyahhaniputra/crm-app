<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        return Inertia::render('customers/index', [
            'customers' => Customer::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('customers/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string',
            'no_telf' => 'required|string',
            'alamat' => 'required|string',
            'kecamatan' => 'required|string',
            'kota' => 'required|string',
            'provinsi' => 'required|string',
            'email' => 'required|email|unique:customers,email',
            'jumlah_transaksi' => 'nullable|integer',
        ]);

        Customer::create($data);
        return redirect()->route('customers.index')->with('success', 'Pelanggan berhasil ditambahkan.');
    }

    public function edit(Customer $customer)
    {
        return Inertia::render('customers/edit', ['customer' => $customer]);
    }

    public function update(Request $request, Customer $customer)
    {
        $data = $request->validate([
            'nama' => 'required|string',
            'no_telf' => 'required|string',
            'alamat' => 'required|string',
            'kecamatan' => 'required|string',
            'kota' => 'required|string',
            'provinsi' => 'required|string',
            'email' => 'required|email|unique:customers,email,' . $customer->id,
            'jumlah_transaksi' => 'nullable|integer',
        ]);

        $customer->update($data);
        return redirect()->route('customers.index')->with('success', 'Pelanggan berhasil diperbarui.');
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
        return redirect()->route('customers.index')->with('success', 'Pelanggan dihapus.');
    }
}
