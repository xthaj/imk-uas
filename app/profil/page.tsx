"use client"
import { Anchor, Divider } from 'antd';
import React, { useState } from 'react';
import Sejarah from './sejarah/sejarah';
import VisiMisi from './visi-misi/visiMisi';
import Tugas from './tugas/tugas';

const SejarahPage: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number>();
    return (
        <div className='flex justify-center px-2 sm:px-10 md:px-28 mb-2 text-black max-w-[1440px]'>
            <div className="anchor-profile mt-10 pr-4 lg:w-1/5">
                <Anchor
                    offsetTop={64}
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: 'sejarah',
                            href: '#sejarah',
                            title: <p className='text-lg'>Sejarah Kementerian</p>,
                        },
                        {
                            key: 'visi-misi',
                            href: '#visi-misi',
                            title: <p className='text-lg'>Visi dan Misi</p>,
                            children: [
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
                            ]
                        },
                        {
                            key: 'tugas',
                            href: '#tugas',
                            title: <p className='text-lg'>Tugas</p>,
                        },
                        {
                            key: 'fungsi',
                            href: '#fungsi',
                            title: <p className='text-lg'>Fungsi</p>,
                        },
                        // {
                        //     key: 'struktur',
                        //     href: '#struktur',
                        //     title: <p className='text-lg'>Struktur Organisasi</p>,
                        // },
                        // {
                        //     key: 'lambang',
                        //     href: '#lambang',
                        //     title: <p className='text-lg'>Lambang Organisasi</p>,
                        // },
                    ]}
                />
            </div>
            <div className="mb-2 w-full md:w-4/5">
                <div id='sejarah'>
                    <Sejarah />
                </div>
                <Divider />
                <div id='visi-misi'>
                    <VisiMisi />
                </div>
                <Divider />
                <Tugas />
            </div>
        </div >
    );
};

export default SejarahPage;
