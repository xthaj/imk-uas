import React from "react";
import { Pagination } from "antd";
import { useRouter, useSearchParams } from 'next/navigation';

interface PagesControllerProps {
    page: number;
    per_page: number;
    listLenght: number;
}

export const PaginationList: React.FC<PagesControllerProps> = ({ page, per_page, listLenght }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const setPage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(newPage));
        router.push(`?${params.toString()}`);
    };

    return (
        <div className='flex justify-center'>
            <Pagination size="default" current={page} defaultCurrent={1} total={listLenght} pageSize={per_page} onChange={setPage} />
        </div>
    );
};
