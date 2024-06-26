"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Skeleton } from 'antd';

interface simpleBeritaProps {
    gambar: string;
    judul: string;
    tanggal: Date;
}

const CardBeritaHome: React.FC<simpleBeritaProps> = ({ gambar, judul, tanggal }) => {
    const formattedDate = tanggal ? tanggal.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }) : '';

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const router = useRouter();
    const handleClick = () => {
        if (!loading) {
            router.push(`/publikasi/berita/${encodeURIComponent(judul)}`);
        }
    };

    return (
        <div onClick={handleClick} className="flex items-start border-b border-gray-300 pb-4 transition-colors duration-300 hover:border-green-800 hover:text-green-700 hover:border-b-4 cursor-pointer">
            <div className="">
                {loading ? (
                    <Skeleton.Image active={true} style={{ width: 160, height: 130 }} />
                ) : (
                    <Image
                        src={gambar}
                        alt={judul}
                        width={160}
                        height={160}
                        style={{ objectFit: 'cover' }}
                        className='w-[200px]'
                    />
                )}
            </div>
            <div className="flex-1 ml-4">
                <div className=''>
                    {loading ? (
                        <>
                            <Skeleton.Input active={true} size="large" style={{ width: '100%', marginBottom: '8px' }} />
                            <Skeleton.Input active={true} size="small" style={{ width: '60%' }} />
                        </>
                    ) : (
                        <>
                            <h2 className="text-lg font-semibold">
                                {judul}
                            </h2>
                            <p className="text-gray-600">{formattedDate}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardBeritaHome;