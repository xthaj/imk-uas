import React from 'react';
import MaxWLayout from '../MaxWLayout';
import Judul2 from '@/components/Tittle/judul2';

const BasisDataLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWLayout>
            <header className='text-gray-700 '>
                <Judul2 text='Basis Data' />
            </header>
            {children}
        </MaxWLayout>

    );
};

export default BasisDataLayout;