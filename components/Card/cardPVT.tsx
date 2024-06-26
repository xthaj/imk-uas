import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PvtProps } from '@/utils/dataType';
import Link from 'next/link';
import { Skeleton } from 'antd';


const CardPvtHome: React.FC<PvtProps> = ({ judul, tanggal, gambar, link }) => {
    const formattedDate = tanggal.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <Link href={link}>
            <div className="flex flex-col items-start pb-4 h-full">
                <div className="w-full">
                    {loading ? (
                        <Skeleton.Image active={true} style={{ width: 350, height: 400 }} />
                    ) : (
                        <Image
                            src={gambar}
                            alt={judul}
                            width={160}
                            height={160}
                            layout="responsive"
                            objectFit="cover"
                            className=""
                        />
                    )}

                </div>
                <div className="py-4">
                    <div className="text-start">
                        {loading ? (
                            <div className="flex flex-col gap-2">
                                <Skeleton.Input active={true} size="large" style={{ width: '100%' }} />
                                <Skeleton.Input active={true} size="small" style={{ width: '60%' }} />
                            </div>
                        ) : (
                            <>
                                <h2 className="text-lg xl:text-2xl font-semibold hover:text-green-800 transition-colors duration-300 text-black">
                                    {judul}
                                </h2>
                                <p className="text-gray-600">{formattedDate}</p>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardPvtHome;
