import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import Judul2 from '@/components/Tittle/judul2';
import { Divider } from 'antd';
import Link from 'next/link';

const PortalPage: React.FC = () => {
    const menuItems = [
        { label: 'Sekretariat Jenderal', href: 'https://pertanian.go.id/setjen/' },
        { label: 'Inspektorat Jenderal', href: 'https://itjen.pertanian.go.id' },
        { label: 'Tanaman Pangan', href: 'https://tanamanpangan.pertanian.go.id/' },
        { label: 'Hortikultura', href: 'https://hortikultura.pertanian.go.id/' },
        { label: 'Peternakan dan Kesehatan Hewan', href: 'https://ditjenpkh.pertanian.go.id/' },
        { label: 'Standarisasi Instrumen Pertanian', href: 'https://bsip.pertanian.go.id/' },
        { label: 'Prasarana dan Sarana Pertanian', href: 'https://psp.pertanian.go.id/' },
        { label: 'Penyuluhan dan Pengembangan SDM', href: 'https://bppsdmp.pertanian.go.id/' },
    ];

    return (
        <div className=''>
            <header className="">
                <h2 className="text-heading2 lg:text-heading1 mb-2">Portal Unit Kerja</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <ul className="space-y-8 pt-5 ">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center text-lg font-semibold font-inter">
                        <ArrowRightOutlined style={{ marginRight: 20 }} />
                        <Link href={item.href} target={"_blank"} className="inline-block border-b-2 border-gray-700 pb-2">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PortalPage;