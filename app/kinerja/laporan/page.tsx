"use client"
import React, { useState } from 'react';
import { Anchor } from 'antd';
import LaporanKonten from './laporan';


const VisiPage: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number>();
    return (
        <div className='flex flex-col md:flex-row justify-center'>
            <div className=" bg-white text-black pb-10 md:pr-10 md:w-10/12">
                <LaporanKonten />
            </div>
            <div className="anchor-profile mt-10 md:w-2/12">
                <Anchor
                    offsetTop={64}
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: 'laporan1',
                            href: '#laporan1',
                            title: <p className='text-lg'>Laporan Keuangan</p>,
                        },
                        {
                            key: 'laporan2',
                            href: '#laporan2',
                            title: <p className='text-lg'>Laporan Tahunan</p>,
                        },
                        {
                            key: 'laporan3',
                            href: '#laporan3',
                            title: <p className='text-lg'>Laporan PPID</p>,
                        },
                        {
                            key: 'laporan4',
                            href: '#laporan4',
                            title: <p className='text-lg'>Laporan Kinerja</p>,
                        },
                        {
                            key: 'laporan5',
                            href: '#laporan5',
                            title: <p className='text-lg'>Laporan Eselon I</p>,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default VisiPage;
