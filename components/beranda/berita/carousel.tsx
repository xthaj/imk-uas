import React, { useState, useEffect } from 'react';
import { Carousel, ConfigProvider } from 'antd';
import { dataBerita } from '@/utils/dataBerita';
import BeritaGambar from './gambar';
import SkeletonCarousel from './SkeletonGambar';

const BeritaCarousel: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Carousel: {
                        arrowSize: 54,
                        arrowOffset: 16,
                        dotHeight: 12,
                        dotWidth: 12,
                        dotActiveWidth: 16,
                        dotOffset: 24
                    },
                }, token: {

                }
            }}
        >
            <div className="w-full max-w-[649px] mx-auto">
                {loading ? (
                    <SkeletonCarousel />
                ) : (
                    <Carousel
                        arrows
                        infinite={true}
                        autoplay
                    >
                        {
                            dataBerita.slice(0, 4).map((news, index) => (
                                <div key={index}><BeritaGambar judul={news.judul} gambar={news.gambar} tanggal={news.tanggal} /></div>
                            ))
                        }
                    </Carousel>
                )}
            </div>
        </ConfigProvider>
    );
};

export default BeritaCarousel;