"use client"
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import MaxWLayout from '../MaxWLayout';
import SearchInput from '../../components/Pencarian/searchInput';
import BeritaKontenList from '../../components/Pencarian/BeritaKontenList';
import BukuKontenList from '@/components/Pencarian/BukuKontenList';
import MagazineKontenList from '@/components/Pencarian/MagazineKontenList';
import { useRouter } from 'next/navigation';

const { TabPane } = Tabs;

const UjiCoba = ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const initialQuery = String(searchParams?.query || "");
    const [query, setQuery] = useState(initialQuery);
    const router = useRouter();

    useEffect(() => {
        setQuery(initialQuery);
    }, [initialQuery]);

    const handleSearch = (newQuery: string) => {
        const searchParams = new URLSearchParams({
            query: newQuery,
            sort: 'terbaru',
            kat: 'semua'
        });
        const newUrl = `/pencarian?${searchParams.toString()}`;
        router.push(newUrl);
    }

    return (
        <MaxWLayout>
            <div className=''>
                <div className="">
                    <header id=''>
                        <h2 className="text-heading2 lg:text-heading1 mb-2">Pencarian</h2>
                    </header>
                    <SearchInput initialQuery={query} onSearch={handleSearch} />
                    <div className='mt-3'>
                        <Tabs defaultActiveKey="1">
                            <TabPane
                                tab={
                                    <span className="flex items-center text-lg md:text-lg font-semibold md:h-8 md:px-3">
                                        Berita Kementerian
                                    </span>
                                }
                                key="1"
                            >
                                <BeritaKontenList query={query} />
                            </TabPane>
                            <TabPane
                                tab={
                                    <span className="flex items-center text-lg md:text-lg font-semibold md:h-8 md:px-3">
                                        Buku
                                    </span>
                                }
                                key="3"
                            >
                                <div className="container mx-auto">
                                    <BukuKontenList query={query} />
                                </div>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span className="flex items-center text-lg md:text-lg font-semibold md:h-8 md:px-3">
                                        E-Magazine
                                    </span>
                                }
                                key="4"
                            >
                                <div className="container mx-auto">
                                    <MagazineKontenList query={query} />
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </MaxWLayout>
    );
};

export default UjiCoba;