import React from 'react';
import { Empty } from 'antd';
import CardPenguMain from '../Card/cardPenguMain';
import { PengumumanProps } from '@/utils/dataType';


interface PengumumanListProps {
    listPengu: PengumumanProps[];
    query: string;
}

const PenguKontenList: React.FC<PengumumanListProps> = ({ listPengu, query }) => {
    return (
        <div className=''>
            {listPengu.length > 0 ? (
                listPengu.map((item, index) => (
                    <div key={index} className='mt-4'>
                        <CardPenguMain
                            judul={item.judul}
                            gambar={item.gambar}
                            query={query}
                            nomor={item.nomor}
                        />
                    </div>
                ))
            ) : (
                <Empty style={{ marginTop: 10 }} description="Tidak ada hasil yang ditemukan" />
            )}
        </div>
    );
};

export default PenguKontenList;
