import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Highlighter from 'react-highlight-words';

interface ListBumaMain {
    judul: string;
    link: string;
    gambar: string;
    query: string;
    tanggal?: Date | null;
}

const CardBukuMagazine: React.FC<ListBumaMain> = ({ judul, gambar, link, query, tanggal }) => {
    return (
        <Link href={link}>
            <div className="flex flex-col items-start h-[500px] p-4 border transition-colors duration-300 hover:border-b-green-800 hover:border-b-4 rounded-md">
                <div className="w-full h-[400px] relative">
                    <Image
                        src={gambar}
                        alt={judul}
                        layout="fill"
                        objectFit="cover"
                        className="w-full"
                    />
                </div>
                <div className="flex-1 pt-4 flex flex-col justify-between">
                    <div className="text-start">
                        <h2 className="text-lg xl:text-2xl font-semibold hover:text-green-800 transition-colors duration-300 text-gray-700 ">
                            <Highlighter
                                highlightClassName="bg-yellow-200"
                                searchWords={[query]}
                                autoEscape={true}
                                textToHighlight={judul}
                            />
                        </h2>
                        {tanggal && (
                            <p className="text-md md:text-lg text-gray-500 mt-2">
                                {tanggal.toLocaleDateString('id-ID', {
                                    year: 'numeric',
                                    month: 'long',
                                })}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardBukuMagazine;
