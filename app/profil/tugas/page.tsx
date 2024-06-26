"use client"
import React from 'react';
import { Anchor } from 'antd';
import Tugas from './tugas';


const TugasPage: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center'>
            <div className="md:pr-10">
                <Tugas />
            </div>
            <div className="anchor-profile mt-10 min-w-[160px] hidden md:block">
                <Anchor
                    offsetTop={64}
                    items={[
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
                    ]}
                />
            </div>
        </div>
    );
};

export default TugasPage;
