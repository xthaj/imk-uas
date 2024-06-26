import React from 'react';
import Image from 'next/image';
import Highlighter from 'react-highlight-words';

interface ListPenguMain {
    gambar: string;
    judul: string;
    nomor: string;
    query: string;
}

const CardPenguMain: React.FC<ListPenguMain> = ({ gambar, judul, nomor, query }) => {
    return (
        <div className="group flex flex-col sm:flex-row items-start border-b border-gray-300 pb-4 transition-colors duration-300 hover:border-green-800 hover:border-b-4 hover:text-green-800">
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
            <div className="flex-1 ml-4">
                <div className=''>

                    <h2 className="text-lg xl:text-2xl font-semibold">
                        <Highlighter
                            highlightClassName="bg-yellow-200"
                            searchWords={[query]}
                            autoEscape={true}
                            textToHighlight={judul}
                        />
                    </h2>
                    <p className="text-gray-600">{nomor}</p>
                </div>
            </div>
        </div>
    );
};

export default CardPenguMain;