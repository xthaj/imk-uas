import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface JelajahiDataProps {
    // Anda dapat menambahkan props yang diperlukan di sini
}

const JelajahiData: React.FC<JelajahiDataProps> = () => {
    const menuItems = [
        { label: 'Penduduk, tenaga kerja, dan kemiskinan pertanian', href: '/penduduk-tenaga-kerja' },
        { label: 'Basis data pertanian', href: '/basis-data-pertanian' },
        { label: 'Informasi harga komoditas', href: '/harga-komoditas' },
        { label: 'Ekspor Impor', href: '/ekspor-impor' },
    ];

    return (
        <div className="px-6 md:px-10 xl:px-24 py-16 max-w-[1440px] mx-auto tracking-wide text-white">
            <header className=''>
                <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4">Jelajahi Data</h2>
            </header>
            <ul className="space-y-8 pt-5 text-lg md:text-xl">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center text-[23px] font-semibold font-inter">
                        <ArrowRightOutlined style={{ marginRight: 20 }} />
                        <Link href={item.href} className="inline-block border-b pb-2">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JelajahiData;