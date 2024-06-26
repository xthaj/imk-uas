"use client"
import FilterBerita from '@/components/Filter/pencarian/filterBerita';
import BeritaKontenList from '@/components/Pencarian/BeritaKontenList';
import Judul2 from '@/components/Tittle/judul2';
import { dataBerita } from '@/utils/dataBerita';
import { dataPengumuman } from '@/utils/dataPengu';
import { Divider, Image } from 'antd';
import { useParams } from 'next/navigation';
import React from 'react';


const BeritaPage: React.FC = () => {

    return (
        <div>
            <header >
                <h2 className="text-heading2 md:text-heading1 mb-2">Berita</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <BeritaKontenList query='' />
        </div>
    );
};

export default BeritaPage;
