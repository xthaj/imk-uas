import React from 'react';
import { Divider, Image } from 'antd'; import Judul3 from '@/components/Tittle/judul3';
;

const PengaduanPage: React.FC = () => {
    return (
        <div className="">
            <header>
                <h2 className=" text-gray-700 text-heading2 md:text-heading1">Pengaduan</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <Judul3 text='Alur Pengaduan' />
            <ul className="list-decimal list-inside md:text-2xl leading-relaxed mb-4 mt-4 space-y-3">
                <li>Pemohon Informasi dapat menyampaikan pengaduan secara online melalui link Layanan Aspirasi dan Pengaduan Online. </li>
                <li>Pemohon melengkapi formulir yang tersedia di dalamnya.</li>
                <li>Pemohon juga dapat menyampaikan pengaduan melalui google form melalui link Pengaduan Pusat. </li>
            </ul>
            <Image src='/pengaduan/1.jpeg'></Image>
        </div>
    );
};

export default PengaduanPage;
