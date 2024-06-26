import React from 'react';
import MaxWLayout from '../MaxWLayout';
import Judul2 from '@/components/Tittle/judul2';

const DetailBeritaLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWLayout>
            <header className=''>
                <Judul2 text='Publikasi' />
            </header>
            {children}
        </MaxWLayout>

    );
};

export default DetailBeritaLayout;