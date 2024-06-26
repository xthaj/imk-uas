import React from 'react';
import Judul1 from '@/components/Tittle/judul1';
import { Divider, Row, Col } from 'antd';
// import { dataBerita } from '@/components/Card-Berita/dataBerita';
import CardPenguHome from '../../Card/cardPenguHome';
import { dataBerita } from '@/utils/dataBerita';
// import { BeritaProps } from '@/utils/dataType';
// import { dataPengumuman } from '@/utils/dataPengu';

const PenguBaru: React.FC = () => {
    const pengumumanData = dataBerita.filter((berita) => berita.kategori === 'Pengumuman');
    return (
        <div className='mt-10'>
            <div className='flex flex-col justify-center'>
                <header className=''>
                    <Judul1 text='Pengumuman' />
                    <Divider style={{ borderTop: '4px solid #8A8817' }} />
                </header>
                <div className='w-full md:w-auto pt-3'>
                    <Row gutter={[54, 16]} justify="center">
                        {pengumumanData.slice(0, 4).map((news, index) => (
                            <Col xs={24} sm={24} md={12} lg={12} key={index}>
                                <CardPenguHome data={news} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default PenguBaru;
