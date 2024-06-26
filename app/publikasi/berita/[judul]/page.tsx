"use client"
import Judul2 from '@/components/Tittle/judul2';
import { dataBerita } from '@/utils/dataBerita';
import { dataPengumuman } from '@/utils/dataPengu';
import { Divider, Image } from 'antd';
import { useParams } from 'next/navigation';
import React from 'react';


const DetailBerita: React.FC = () => {
    const params = useParams();
    const judulEncoded = String(params?.judul);
    const judul = judulEncoded ? decodeURIComponent(judulEncoded) : null;

    console.log(judul); // Untuk memeriksa judul yang telah didekode

    const berita = dataBerita.find((item) => item.judul === judul);

    if (!judul) {
        return <div>Loading...</div>;
    }

    if (!berita) {
        return <div>Berita tidak ditemukan</div>;
    }

    return (
        <div>
            <header >
                <h2 className="text-heading2 mb-2">{berita.judul}</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div className="container flex justify-center">
                <Image src={berita.gambar} alt={berita.judul} width={500} />
            </div>

            <div className="mt-5 leading-relaxed">
                {berita.deskripsi.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default DetailBerita;
