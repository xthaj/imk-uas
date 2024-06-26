import React from 'react';
import { dataPvt } from '../../../utils/dataPvt';
import CardPvtHome from '../../Card/cardPVT';
import Judul1 from '@/components/Tittle/judul1';
import { Divider } from 'antd';

const PvtBerita: React.FC = () => {
    return (
        <div className='pt-10'>
            <div className='flex flex-col justify-center'>
                <header className=''>
                    <Judul1 text='Perlindungan Varietas Tanaman' />
                    <Divider style={{ borderTop: '4px solid #8A8817' }} />
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                    {dataPvt.slice(0, 3).map((news, index) => (
                        <div key={index} className="h-full">
                            <CardPvtHome judul={news.judul} tanggal={news.tanggal} gambar={news.gambar} link={news.link} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default PvtBerita;
