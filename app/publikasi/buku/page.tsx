"use client"
import BukuKontenList from '@/components/Pencarian/BukuKontenList';
import MagazineKontenList from '@/components/Pencarian/MagazineKontenList';
import Judul2 from '@/components/Tittle/judul2';
import { Divider, Image } from 'antd';
import React from 'react';


const BukuPage: React.FC = () => {

    return (
        <div>
            <header >
                <h2 className="text-heading2 md:text-heading1 mb-2">Publikasi Buku</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <p className=' leading-relaxed mb-3'>Buku Seri Pembangunan Pertanian merupakan rangkaian buku yang berisikan informasi terkait kebijakan, program dan capaian kinerja di bidang pertanian.</p>
            <BukuKontenList query='' />
        </div>
    );
};

export default BukuPage;
