import React, { useState, useEffect } from 'react';
import { Empty } from 'antd';
import CardBeritaMain from '@/components/Card/cardBeritaMain';
import { BeritaProps } from '@/utils/dataType';
import { useRouter, useSearchParams } from 'next/navigation';
import { searchFilterBerita } from '@/utils/searchGlobal';
import FilterBerita from '../Filter/pencarian/filterBerita';
import { defaultPage, defaultPerPage } from '@/utils/constants';
import { PaginationList } from './PaginationList';
import ItemCounter from './ItemCounter';
import LoadingSpinner from '@/components/loading';

interface BeritaListProps {
    query: string;
}

const BeritaKontenList: React.FC<BeritaListProps> = ({ query }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [listBerita, setListBerita] = useState<BeritaProps[]>([]);

    const sort = searchParams.get('sort') || "terbaru";
    const kat = searchParams.get('kat') || "semua";
    const startDate = searchParams.get('startDate') as string | undefined;
    const endDate = searchParams.get('endDate') as string | undefined;

    const page = Number(searchParams.get('page') ?? defaultPage);
    const per_page = Number(searchParams.get('per_page') ?? defaultPerPage);

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true);
            setProgress(0);
            const interval = setInterval(() => {
                setProgress(prevProgress => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prevProgress + 10;
                });
            }, 100);

            setTimeout(() => {
                const results = searchFilterBerita(query, sort, kat, startDate, endDate);
                setListBerita(results);
                setIsLoading(false);
                clearInterval(interval);
            }, 1000);
        };

        fetchData();
    }, [query, sort, kat, startDate, endDate]);

    const handleApplyFilter = (newParams: URLSearchParams) => {
        router.push(`?${newParams.toString()}`);
    };

    return (
        <div className=''>
            <div className="container w-full">
                <FilterBerita query={query} onApplyFilter={handleApplyFilter} />
            </div>
            {isLoading ? (
                <LoadingSpinner progress={progress} />
            ) : (
                <>
                    <ItemCounter jumlah={listBerita.length} page={page} per_page={per_page} />
                    {listBerita.length > 0 ? (
                        listBerita.slice((page - 1) * defaultPerPage, page * defaultPerPage).map((item, index) => (
                            <div key={index} className='mt-4'>
                                <CardBeritaMain
                                    judul={item.judul}
                                    gambar={item.gambar}
                                    tanggal={item.tanggal}
                                    query={query}
                                    author={item.author}
                                    ringkasan={item.ringkasan}
                                    kategori={item.kategori}
                                />
                            </div>
                        ))
                    ) : (
                        <Empty style={{ marginTop: 10 }} description="Tidak ada hasil yang ditemukan" />
                    )}
                    <div className='mt-4'><PaginationList page={page} per_page={per_page} listLenght={listBerita.length} /></div>
                </>
            )}
        </div>
    );
};

export default BeritaKontenList;