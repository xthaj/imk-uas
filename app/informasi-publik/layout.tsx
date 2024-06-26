import React from 'react';
import MaxWLayout from '../MaxWLayout';
import Judul2 from '@/components/Tittle/judul2';

const informasiPublikLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWLayout>
            <header className=''>
                <Judul2 text='Informasi Publik' />
            </header>
            {children}
        </MaxWLayout>

    );
};

export default informasiPublikLayout;