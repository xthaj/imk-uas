import React from 'react';
import Image from 'next/image';
import Highlighter from 'react-highlight-words';
import { useRouter } from 'next/navigation';

interface ListBeritaMain {
    tanggal: Date;
    author?: string | null;
    judul: string;
    ringkasan: string;
    gambar: string;
    query: string;
    kategori: string;
}

const CardBeritaMain: React.FC<ListBeritaMain> = ({ gambar, judul, tanggal, author, ringkasan, query, kategori }) => {
    const formattedDate = tanggal ? tanggal.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }) : null;

    const router = useRouter();
    const handleClick = () => {
        router.push(`/publikasi/berita/${encodeURIComponent(judul)}`);
    };

    return (
        <div onClick={handleClick} className="group flex flex-col sm:flex-row items-start border-b border-gray-300 pb-4 transition-colors duration-300 hover:border-green-800 hover:text-green-700 hover:border-b-4 cursor-pointer">
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
                    <p className="text-gray-600">{formattedDate + ' | ' + kategori}</p>
                    <h2 className="text-lg xl:text-2xl font-semibold">
                        <Highlighter
                            highlightClassName="bg-yellow-200"
                            searchWords={[query]}
                            autoEscape={true}
                            textToHighlight={judul}
                        />
                    </h2>
                    <p className="text-gray-700 mt-2">
                        {ringkasan}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardBeritaMain;
