import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function CreateCustomer() {
    const { data, setData, post, processing, errors } = useForm({
        nama: '',
        no_telf: '',
        email: '',
        alamat: '',
        kecamatan: '',
        kota: '',
        provinsi: '',
        jumlah_transaksi: 0,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/customers');
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Customers', href: '/customers' }, { title: 'Tambah', href: '#' }]}>
            <Head title="Tambah Pelanggan" />
            <div className="p-6 max-w-3xl mx-auto">
                <h1 className="text-xl font-semibold mb-6">Tambah Pelanggan</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Nama" value={data.nama} onChange={e => setData('nama', e.target.value)} error={errors.nama} />
                    <Input label="No. WA" value={data.no_telf} onChange={e => setData('no_telf', e.target.value)} error={errors.no_telf} />
                    <Input label="Email" type="email" value={data.email} onChange={e => setData('email', e.target.value)} error={errors.email} />
                    <Input label="Alamat" value={data.alamat} onChange={e => setData('alamat', e.target.value)} error={errors.alamat} />
                    <Input label="Kecamatan" value={data.kecamatan} onChange={e => setData('kecamatan', e.target.value)} error={errors.kecamatan} />
                    <Input label="Kota" value={data.kota} onChange={e => setData('kota', e.target.value)} error={errors.kota} />
                    <Input label="Provinsi" value={data.provinsi} onChange={e => setData('provinsi', e.target.value)} error={errors.provinsi} />
                    <Input
                        label="Jumlah Transaksi"
                        type="number"
                        value={data.jumlah_transaksi}
                        onChange={e => setData('jumlah_transaksi', Number(e.target.value))}
                        error={errors.jumlah_transaksi}
                    />

                    <div className="md:col-span-2">
                        <button type="submit" disabled={processing} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-sm">
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

function Input({ label, value, onChange, error, type = 'text' }: any) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-700 mb-1">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        </div>
    );
}
