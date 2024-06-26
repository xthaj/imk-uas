"use client"
import React from 'react';
import VisiKonten from './visiMisi';
import { Anchor } from 'antd';


const VisiPage: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center'>
            <div className="md:pr-10">
                <VisiKonten />
            </div>
            <div className="anchor-profile mt-10 min-w-[160px] hidden md:block">
                <Anchor
                    offsetTop={64}
                    items={[
                        {
                            key: 'visi',
                            href: '#visi',
                            title: <p className='text-lg'>Visi</p>,
                        },
                        {
                            key: 'visi2',
                            href: '#visi2',
                            title: <p className='text-lg'>Makna dari Visi</p>,
                        },
                        {
                            key: 'misi',
                            href: '#misi',
                            title: <p className='text-lg'>Misi</p>,
                        },
                        {
                            key: 'misi2',
                            href: '#misi2',
                            title: <p className='text-lg'>Makna dari Misi</p>,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default VisiPage;
