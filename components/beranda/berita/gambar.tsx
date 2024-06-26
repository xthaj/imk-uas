import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface simpleBeritaProps {
    gambar: string;
    judul: string;
    tanggal: Date;
}

const BeritaGambar: React.FC<simpleBeritaProps> = ({ gambar, judul, tanggal }) => {
    const formattedDate = tanggal.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const router = useRouter();
    const handleClick = () => {
        router.push(`/publikasi/berita/${encodeURIComponent(judul)}`);
    };


    return (
        <div onClick={handleClick} className='relative h-[607px] w-full mx-auto max-w-[649px] cursor-pointer'>
            <Image
                src={gambar}
                alt={judul}
                fill
                style={{ objectFit: 'cover' }}
                sizes='(max-width: 768px) 100vw'
            />
            <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-b from-transparent to-shade4 flex items-end px-12 py-5">
                <div>
                    <p className="text-white mb-1">{formattedDate}</p>
                    <h2 className="text-white text-heading3 mb-14">{judul}</h2>
                    {/* <p className="text-white">{ringkasan}</p> */}
                </div>
            </div>
        </div>
    );
};

export default BeritaGambar;