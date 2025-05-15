import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@/types';

interface Customer {
    id: number;
    nama: string;
    no_telf: string;
    email: string;
    alamat: string;
    kecamatan: string;
    kota: string;
    provinsi: string;
    jumlah_transaksi: number;
}

export default function EditCustomer({ customer }: PageProps<{ customer: Customer }>) {
    const { data, setData, put, processing, errors } = useForm({
        nama: customer.nama,
        no_telf: customer.no_telf,
        email: customer.email,
        alamat: customer.alamat,
        kecamatan: customer.kecamatan,
        kota: customer.kota,
        provinsi: customer.provinsi,
        jumlah_transaksi: customer.jumlah_transaksi,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/customers/${customer.id}`);
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Customers', href: '/customers' }, { title: 'Edit', href: '#' }]}>            
            <Head title="Edit Pelanggan" />
            <div className="p-6 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Edit Pelanggan</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input label="Nama" value={data.nama} onChange={e => setData('nama', e.target.value)} error={errors.nama} />
                    <Input label="No. WA" value={data.no_telf} onChange={e => setData('no_telf', e.target.value)} error={errors.no_telf} />
                    <Input label="Email" type="email" value={data.email} onChange={e => setData('email', e.target.value)} error={errors.email} />
                    <Input label="Alamat" value={data.alamat} onChange={e => setData('alamat', e.target.value)} error={errors.alamat} />
                    <Input label="Kecamatan" value={data.kecamatan} onChange={e => setData('kecamatan', e.target.value)} error={errors.kecamatan} />
                    <Input label="Kota" value={data.kota} onChange={e => setData('kota', e.target.value)} error={errors.kota} />
                    <Input label="Provinsi" value={data.provinsi} onChange={e => setData('provinsi', e.target.value)} error={errors.provinsi} />
                    <Input label="Jumlah Transaksi" type="number" value={data.jumlah_transaksi} onChange={e => setData('jumlah_transaksi', Number(e.target.value))} error={errors.jumlah_transaksi} />

                    <button type="submit" disabled={processing} className="bg-blue-600 text-white px-4 py-2 rounded">
                        Simpan Perubahan
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}

function Input({ label, value, onChange, error, type = 'text' }: any) {
    return (
        <div>
            <label className="block font-medium mb-1">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full border rounded p-2"
            />
            {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        </div>
    );
}
