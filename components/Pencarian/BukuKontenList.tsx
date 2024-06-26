import React, { useState, useEffect } from 'react';
import { Empty } from 'antd';
import { BukuProps } from '@/utils/dataType';
import CardBukuMagazine from '../Card/cardBukuMagazine';
import { searchBuku } from '@/utils/searchGlobal';
import { useSearchParams, useRouter } from 'next/navigation';
import { defaultPage, defaultPerPage } from '@/utils/constants';
import { PaginationList } from './PaginationList';
import ItemCounter from './ItemCounter';
import LoadingSpinner from '@/components/loading';

interface BukuListProps {
    query: string;
}

const BukuKontenList: React.FC<BukuListProps> = ({ query }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [listBuku, setListBuku] = useState<BukuProps[]>([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const page = Number(searchParams.get('page') ?? defaultPage);
    const per_page = Number(searchParams.get('per_page') ?? 6);

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
                const results = searchBuku(query);
                setListBuku(results);
                setIsLoading(false);
                clearInterval(interval);
            }, 1000);
        };

        fetchData();
    }, [query]);

    const handleApplyFilter = (newParams: URLSearchParams) => {
        router.push(`?${newParams.toString()}`);
    };

    return (
        <div>
            {isLoading ? (
                <LoadingSpinner progress={progress} />
            ) : (
                <>
                    <ItemCounter jumlah={listBuku.length} page={page} per_page={per_page} />
                    {listBuku.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                            {listBuku.slice((page - 1) * per_page, page * per_page).map((item, index) => (
                                <CardBukuMagazine
                                    judul={item.judul}
                                    gambar={item.gambar}
                                    query={query}
                                    link={item.link}
                                    key={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <Empty style={{ marginTop: 10 }} description="Tidak ada hasil yang ditemukan" />
                    )}
                    <div className='mt-4'><PaginationList page={page} per_page={per_page} listLenght={listBuku.length} /></div>
                </>
            )}
        </div>
    );
};

export default BukuKontenList;