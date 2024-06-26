import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BeritaProps } from '@/utils/dataType';
import { Skeleton } from 'antd';

interface PenguProps {
    data: BeritaProps;
}

const truncateText = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
};

const CardPenguHome: React.FC<PenguProps> = ({ data }) => {
    const truncatedTitle = truncateText(data.judul, 8); // Batasi hingga 5 kata
    const router = useRouter();
    const handleClick = () => {
        router.push(`/publikasi/berita/${encodeURIComponent(data.judul)}`);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div onClick={handleClick} className="flex items-start border-b-2 border-gray-300 pb-4 transition-colors duration-300 hover:border-green-800 hover:text-green-700 hover:border-b-4 cursor-pointer">
            <div className="h-32">
                {loading ? (
                    <Skeleton.Image active={true} style={{ width: 160, height: 130 }} />
                ) : (
                    <Image
                        src={data.gambar}
                        alt={data.judul}
                        width={200}
                        height={200}
                        style={{ objectFit: 'cover' }}
                        className='w-[150px] md:w-[200px]'
                    />
                )}
            </div>
            <div className="flex-1 ml-4">
                <div className=''>
                    {loading ? (
                        <div className="flex flex-col gap-2">
                            <Skeleton.Input active={true} size="large" style={{ width: '100%' }} />
                            <Skeleton.Input active={true} size="small" style={{ width: '60%' }} />
                        </div>
                    ) : (
                        <>
                            <h2 className="text-lg xl:text-lg font-semibold">
                                {truncatedTitle}
                            </h2>
                            <p className="text-gray-600">{data.nomor}</p></>
                    )}


                </div>
            </div>
        </div>
    );
};

export default CardPenguHome;
