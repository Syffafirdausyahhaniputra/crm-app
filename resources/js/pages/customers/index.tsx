import AppLayout from '@/layouts/app-layout'
import { Head, Link, useForm } from '@inertiajs/react'
import { PageProps } from '@/types'
import { type BreadcrumbItem } from '@/types'
import React from 'react'

interface Customer {
  id: number
  nama: string
  no_telf: string
  email: string
  alamat: string
  kecamatan: string
  kota: string
  provinsi: string
  jumlah_transaksi: number
}

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Customers', href: '/customers' },
]

export default function CustomerIndex({ customers }: PageProps<{ customers: Customer[] }>) {
  const { delete: destroy } = useForm()

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus pelanggan ini?')) {
      destroy(route('customers.destroy', id))
    }
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Data Pelanggan" />

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Data Pelanggan</h1>
          <Link
            href="/customers/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            + Tambah Pelanggan
          </Link>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-2 font-medium text-gray-600">Nama</th>
                <th className="px-4 py-2 font-medium text-gray-600">No. WA</th>
                <th className="px-4 py-2 font-medium text-gray-600">Email</th>
                <th className="px-4 py-2 font-medium text-gray-600">Kota</th>
                <th className="px-4 py-2 font-medium text-gray-600">Transaksi</th>
                <th className="px-4 py-2 font-medium text-gray-600 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.length > 0 ? (
                customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="px-4 py-2">{customer.nama}</td>
                    <td className="px-4 py-2">{customer.no_telf}</td>
                    <td className="px-4 py-2">{customer.email}</td>
                    <td className="px-4 py-2">{customer.kota}</td>
                    <td className="px-4 py-2 text-center">{customer.jumlah_transaksi}</td>
                    <td className="px-4 py-2 flex gap-2 justify-center">
                      <Link
                        href={`/customers/${customer.id}/edit`}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(customer.id)}
                        className="text-red-600 hover:underline"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-4 text-center text-gray-500" colSpan={6}>
                    Tidak ada data pelanggan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  )
}
