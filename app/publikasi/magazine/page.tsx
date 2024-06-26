"use client"
import MagazineKontenList from '@/components/Pencarian/MagazineKontenList';
import Judul2 from '@/components/Tittle/judul2';
import { Divider, Image } from 'antd';
import React from 'react';


const MagazinePage: React.FC = () => {

    return (
        <div>
            <header >
                <h2 className="text-heading2 md:text-heading1 mb-2">E-Magazine</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <p className=' leading-relaxed mb-5'>Warta Pertanian merupakan media cetak milik Kementerian Pertanian yang menyajikan informasi di bidang pertanian terbaru dan terkini.</p>
            <MagazineKontenList query='' />
        </div>
    );
};

export default MagazinePage;
