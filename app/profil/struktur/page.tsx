import React from 'react';
import { Divider, Image } from 'antd';
import Judul2 from '@/components/Tittle/judul2';

const StrukturPage: React.FC = () => {
    return (
        <div className="">
            <header>
                <h2 className=" text-gray-700 text-heading2 md:text-heading1">Struktur Organisasi</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <Image src='/struktur.jpg'></Image>
            <div className=" lg:items-start lg:w-3/4 lg:pr-8">
                <ul className="list-decimal list-inside  leading-relaxed mb-4 mt-4 space-y-3">
                    <li>Menteri Pertanian</li>
                    <li>Staf Ahli</li>
                    <li>Sekretariat Jenderal</li>
                    <li>Inspektorat Jenderal</li>
                    <li>Direktorat Jenderal Prasarana & Sarana Pertanian</li>
                    <li>Direktorat Jenderal Tanaman Pangan</li>
                    <li>Direktorat Jenderal Hortikultura</li>
                    <li>Direktorat Jenderal Peternakan</li>
                    <li>Direktorat Jenderal Peternakan & Kesehatan Hewan</li>
                    <li>Badan Standardisasi Instrumen Pertanian</li>
                    <li>Badan Penyuluhan & Pengembangan Sumber Daya Manusia Pertanian</li>
                    <li>Badan Karantina Pertanian</li>
                    <li>Pusat Data & Sistem Informasi Pertanian</li>
                    <li>Pusat Perlindungan Varietas Tanaman & Perizinan Pertanian</li>
                    <li>Pusat Pengelolaan & Penyebaran Teknologi Pertanian</li>
                    <li>Pusat Sosial Ekonomi & Kebijakan Pertanian</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    Unduh Struktur Kementerian Pertanian Resmi{' '}
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
        </div>

    );
};

export default StrukturPage;
