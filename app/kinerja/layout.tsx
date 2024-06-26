import React from 'react';
import MaxWLayout from '../MaxWLayout';
import Judul2 from '@/components/Tittle/judul2';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MaxWLayout>
            <header className=''>
                <Judul2 text='Kinerja' />
            </header>
            {children}
        </MaxWLayout>

    );
};

export default ProfileLayout;