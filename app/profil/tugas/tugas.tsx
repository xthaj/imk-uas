"use client"
import React from 'react';
import { Divider } from 'antd';
import Judul2 from '@/components/Tittle/judul2';
import Judul3 from '@/components/Tittle/judul3';


const TugasKonten: React.FC = () => {
    return (
        <>
            <header id='tugas'>
                <h2 className="text-heading2 lg:text-heading1">Tugas dan Fungsi</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div id='tugas'>
                <Judul3 text='Tugas' />
                <p className=" leading-relaxed">
                    Berdasarkan Peraturan Presiden Republik Indonesia Nomor 117 Tahun 2022, Kementerian Pertanian mempunyai tugas menyelenggarakan urusan pemerintahan di bidang pertanian untuk membantu Presiden dalam menyelenggarakan pemerintahan negara.
                </p>
            </div>
            <Divider></Divider>
            <div id='fungsi' className=''>
                <Judul3 text='Fungsi' />
                <p className=" leading-relaxed mb-4">
                    Dalam melaksanakan tugas, Kementerian Pertanian menyelenggarakan fungsi sebagai berikut:
                </p>
                <ol className="list-decimal list-inside  leading-relaxed mb-4 space-y-3">
                    <li>
                        Perumusan, penetapan, dan pelaksanaan kebijakan di bidang penyediaan prasarana dan sarana pertanian, peningkatan produksi komoditas pertanian, peningkatan nilai tambah, penguatan daya saing, dan pemasaran hasil pertanian.
                    </li>
                    <li>Pengelolaan barang milik/kekayaan negara yang menjadi tanggung jawab Kementerian Pertanian.</li>
                    <li>Pengawasan atas pelaksanaan tugas di lingkungan Kementerian Pertanian.</li>
                    <li>
                        Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan urusan di bidang penyediaan prasarana dan sarana pertanian, peningkatan produksi komoditas pertanian, peningkatan nilai tambah, penguatan daya saing, dan pemasaran hasil pertanian.
                    </li>
                    <li>
                        Penyelenggaraan koordinasi, perumusan, penerapan dan pemeliharaan, serta harmonisasi standar instrumen di bidang pertanian.
                    </li>
                    <li>Penyelenggaraan penyuluhan dan pengembangan sumber daya manusia pertanian.</li>
                    <li>Pelaksanaan perkarantinaan pertanian dan pengawasan keamanan hayati.</li>
                    <li>
                        Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organisasi di lingkungan Kementerian Pertanian.
                    </li>
                    <li>
                        Pelaksanaan dukungan yang bersifat substantif pada seluruh unsur organisasi di lingkungan Kementerian Pertanian.
                    </li>
                </ol>
                <p className="text-lg leading-relaxed mb-4">
                    Peraturan Presiden Republik Indonesia Nomor 117 Tahun 2022 tentang Kementerian Pertanian dapat diunduh{' '}
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        di sini
                    </a>
                    .
                </p>
                <p className="text-lg leading-relaxed">
                    Peraturan Menteri Pertanian Republik Indonesia Nomor 19 Tahun 2022 tentang Organisasi dan Tata Kerja Kementerian Pertanian dapat diunduh{' '}
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        di sini
                    </a>
                    .
                </p>
            </div>
        </>


    )
};

export default TugasKonten;