import React, { useState, useEffect } from 'react';
import { Empty } from 'antd';
import { MagazineProps } from '@/utils/dataType';
import CardBukuMagazine from '../Card/cardBukuMagazine';
import FilterMagazine from '../Filter/pencarian/filterMagazine';
import { useSearchParams, useRouter } from 'next/navigation';
import { searchFilterMaga } from '@/utils/searchGlobal';
import { defaultPage } from '@/utils/constants';
import { PaginationList } from './PaginationList';
import ItemCounter from './ItemCounter';
import LoadingSpinner from '@/components/loading';

interface MagazineListProps {
    query: string;
}

const MagazineKontenList: React.FC<MagazineListProps> = ({ query }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [listMagazine, setListMagazine] = useState<MagazineProps[]>([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const sort = searchParams.get('sort') || "terbaru";
    const kat = searchParams.get('kat') || "semua";
    const startDate = searchParams.get('startDate') as string | undefined;
    const endDate = searchParams.get('endDate') as string | undefined;

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
                const results = searchFilterMaga(query, sort, startDate, endDate);
                setListMagazine(results);
                setIsLoading(false);
                clearInterval(interval);
            }, 1000);
        };

        fetchData();
    }, [query, sort, startDate, endDate]);

    const handleApplyFilter = (newParams: URLSearchParams) => {
        router.push(`?${newParams.toString()}`);
    };

    return (
        <div>
            <FilterMagazine query={query} onApplyFilter={handleApplyFilter} />
            {isLoading ? (
                <LoadingSpinner progress={progress} />
            ) : (
                <>
                    <ItemCounter jumlah={listMagazine.length} page={page} per_page={per_page} />
                    {listMagazine.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                            {listMagazine.slice((page - 1) * per_page, page * per_page).map((item, index) => (
                                <CardBukuMagazine
                                    judul={item.judul}
                                    gambar={item.gambar}
                                    query={query}
                                    link={item.link}
                                    key={index}
                                    tanggal={item.tanggal}
                                />
                            ))}
                        </div>
                    ) : (
                        <Empty style={{ marginTop: 10 }} description="Tidak ada hasil yang ditemukan" />
                    )}
                    <div className='mt-4'><PaginationList page={page} per_page={per_page} listLenght={listMagazine.length} /></div>
                </>
            )}
        </div>
    );
};

export default MagazineKontenList;