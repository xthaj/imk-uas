import React from 'react';
import BeritaCarousel from './carousel';
import Judul1 from '@/components/Tittle/judul1';
import { Col, Divider, Row } from 'antd';
import { dataBerita } from '@/utils/dataBerita';
import CardBeritaHome from '../../Card/cardBeritaHome';

const BeritaBaru: React.FC = () => {
    return (
        <div className='pt-10 '>
            <div className='md:flex md:flex-col lg:flex-row justify-center'>
                <header className='lg:hidden block'>
                    <Judul1 text='Berita Populer' />
                    <Divider style={{ borderTop: '4px solid #8A8817' }} />
                </header>
                <BeritaCarousel />
                <div className='lg:pl-8 xl:pl-10 w-full md:w-auto'>
                    <header className='lg:block hidden'>
                        <Judul1 text='Berita Populer' />
                        <Divider style={{ borderTop: '3px solid #8A8817' }} />
                    </header>
                    <div className='pt-5 lg:pt-0 md:flex md:flex-col md:justify-between md:h-[516px]'>
                        {dataBerita.slice(5, 8).map((news, index) => (
                            <div className='pt-3' key={index}>
                                <CardBeritaHome gambar={news.gambar} judul={news.judul} tanggal={news.tanggal} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeritaBaru;