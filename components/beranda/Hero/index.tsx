"use client"
import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {

    const [keyword, setKeyword] = useState('');
    const router = useRouter();
    const handleSearch = () => {
        const query = { query: keyword, sort: 'terbaru', kat: 'semua' };
        const queryString = new URLSearchParams(query).toString();
        router.push(`/pencarian?${queryString}`);
    };


    return (
        <section
            id="home"
            className="relative z-10 overflow-hidden md:px-44 px-8 pb-[40px] pt-[50px] md:pb-[50px] md:pt-[60px] xl:pb-[90px] xl:pt-[90px] 2xl:pb-[140px] 2xl:pt-[140px] dark:bg-gray-dark "
            style={{
                backgroundImage: `url('/hero2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-shade4 opacity-80"></div>
            <div className="container relative w-full z-20 max-w-[1080px] mx-auto my-0" >
                <h1 className="mb-5 text-white text-3xl md:text-7xl font-sans font-semibold">
                    Pusat Informasi dan Layanan Kementerian Pertanian
                </h1>
                <div className='mt-4 md:mt-8 xl:mt-14 '>
                    <Space.Compact
                        style={{ width: '100%', height: '60px', }}
                    >
                        <Input
                            placeholder='Cari...'
                            style={{ fontSize: '30px', padding: '0 1rem', borderRadius: 0 }}
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onPressEnter={handleSearch}

                        />
                        <Button
                            style={{ height: '60px', fontSize: '40px', borderRadius: 0, display: 'flex', alignItems: 'center', backgroundColor: '#E2EED9' }}
                            onClick={handleSearch}
                        >
                            <SearchOutlined color='white' />
                        </Button>
                    </Space.Compact>
                </div>
            </div>
        </section>
    );
};

export default Hero;