"use client"
import FileCard from '@/components/Card/File-unduh';
import { dataSKDIP } from '@/utils/dataInformasiPublik';
import { Divider } from 'antd';
import React from 'react';
// import IndeksKonten from './indeksKepuasan';


const skdipPage: React.FC = () => {
    return (
        <div>
            <header id='indeks1'>
                <h2 className="text-heading2 lg:text-heading1">Daftar Informasi Publik</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div id='ikm'>
                <p className="leading-relaxed">
                    Undang-Undang No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik(KIP) memberikan jaminan kepastian, khususnya bagi masyarakat untuk dapat mengakses informasi yang ada di badan publik. Sebagaimana ketentuan Pasal 7 ayat 1 dan 2, bahwa Badan Publik wajib menyediakan, memberikan dan/atau menerbitkan Informasi Publik yang berada di bawah kewenangannya kepada Pemohon Informasi Publik, selain informasi yang dikecualikan sesuai dengan ketentuan dan Badan Publik wajib menyediakan Informasi Publik yang akurat, benar, dan tidak menyesatkan.
                </p>
                <div>
                    {
                        dataSKDIP.map((data, index) => (
                            <div key={index} className='mt-4'>
                                <FileCard title={data.judul} fileSize={data.ukuran} fileLink={data.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default skdipPage;
