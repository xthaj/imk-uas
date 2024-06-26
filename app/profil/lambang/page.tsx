import React from 'react';
import { Divider, Image } from 'antd';


const LambangPage: React.FC = () => {

    return (
        <div className="">
            <header>
                <h2 className=" text-gray-700 text-heading2 md:text-heading1">Lambang Organisasi</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <Image src='/lambang.jpg'></Image>
            <ul className="list-none list-inside text-lg leading-relaxed mb-4 mt-4 space-y-3">
                <li>
                    <strong>Tunas</strong>: Menggambarkan pengertian biologis dari seluruh kegiatan yang dikelola oleh Kementerian Pertanian, kecuali manusia sebagai benda hidup.
                </li>
                <li>
                    <strong>Warna Hijau Muda</strong>: Melambangkan pengertian kehidupan.
                </li>
                <li>
                    <strong>Lingkaran Berwarna Merah</strong>: Melambangkan pengertian kesatuan.
                </li>
                <li>
                    <strong>Lingkaran Bersudut Lima Berwarna Coklat</strong>: Melambangkan pengertian dari lima unsur pelaksana utama (tugas-tugas pokok Kementerian Pertanian).
                </li>
                <li>
                    <strong>Warna Dasar Kuning Emas</strong>: Sebagai lambang kemegahan, baik untuk panji, vandel, serta bentuk lainnya.
                </li>
                <li>
                    <strong>Air Berwarna Biru Muda</strong>: Mempunyai pengertian sebagai lambang keagungan.
                </li>
            </ul>
            <p className="text-lg leading-relaxed">
                Unduh Lambang Kementerian Pertanian Resmi{' '}
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

    );
};

export default LambangPage;
