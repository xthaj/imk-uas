"use client"
import React, { useState } from 'react';
import { Anchor } from 'antd';
import AnggaranKonten from './anggaran';


const VisiPage: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number>();
    return (
        <div className='flex flex-col md:flex-row justify-center'>
            <div className=" bg-white text-gray-700 pb-10 md:pr-10">
                <AnggaranKonten />
            </div>
            <div className="anchor-profile mt-10 min-w-[160px]">
                <Anchor
                    offsetTop={64}
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: 'dipa',
                            href: '#dipa',
                            title: <p className='text-lg'>DIPA</p>,
                        },
                        {
                            key: 'rka',
                            href: '#rka',
                            title: <p className='text-lg'>RKA</p>,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default VisiPage;
