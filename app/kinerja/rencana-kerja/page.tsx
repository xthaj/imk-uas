"use client"
import React, { useState } from 'react';
import { Anchor } from 'antd';
import RencanaKerja from './rencanaKerja';


const IndeksKonten: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number>();
    return (
        <div className='flex flex-col md:flex-row justify-center'>
            <div className=" bg-white text-black pb-10 md:pr-10 md:w-10/12">
                <RencanaKerja />
            </div>
            <div className="anchor-profile mt-10 md:w-2/12">
                <Anchor
                    offsetTop={64}
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: 'rencana1',
                            href: '#rencana1',
                            title: <p className='text-lg'>Rencana Strategi</p>,
                        },
                        {
                            key: 'rencana2',
                            href: '#rencana2',
                            title: <p className='text-lg'>Rencana Kerta Tahunan</p>,
                        },
                        {
                            key: 'rencana3',
                            href: '#rencana3',
                            title: <p className='text-lg'>Rekapilutasi RKT</p>,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default IndeksKonten;
