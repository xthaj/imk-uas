import React from 'react';
import Image from 'next/image';
import { BeritaProps, DataGlobalProps } from '@/utils/dataType';
import Highlighter from 'react-highlight-words';

interface CardGlobalProps {
    judul: string;
    gambar: string;
    tipe: string;
    query: string;
}

const CardGlobal: React.FC<CardGlobalProps> = ({ gambar, judul, tipe, query }) => {

    return (
        <div className="flex flex-col sm:flex-row items-start border-b border-gray-300 pb-4">
            <div className="w-50">
                <Image
                    src={gambar}
                    alt={judul}
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    className='sm:w-[200px] w-[588px]'
                />
            </div>
            <div className="sm:flex-1 sm:ml-4">
                <div className=''>
                    <p className="text-gray-600">{tipe}</p>
                    <h2 className="text-lg xl:text-2xl font-semibold hover:text-green-800 transition-colors duration-300 text-black">
                        <Highlighter
                            highlightClassName="bg-yellow-200"
                            searchWords={[query]}
                            autoEscape={true}
                            textToHighlight={judul}
                        />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CardGlobal;
