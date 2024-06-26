import { rKTahunan, rKUnit } from '@/utils/dataKinerja';
import FileCard from '@/components/Card/File-unduh';
import Judul2 from '@/components/Tittle/judul2';
import Judul3 from '@/components/Tittle/judul3';
import { Divider } from 'antd';
import React from 'react';

const RencanaKerja: React.FC = () => {
    return (
        <>
            <header id='rencana1'>
                <h2 className="text-gray-700 text-heading2 lg:text-heading1">Rencana Kerja Kementerian</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div id='rencana1'>
                <Judul3 text='Rencana Strategis' />
                <p className="leading-relaxed">
                    Rencana Strategis (Renstra) merupakan dokumen perencanaan lima tahunan yang memuat Visi, Misi, Tujuan dan Sasaran yang ingin dicapai, termasuk strategi, kebijakan, program yang akan dilaksanakan dalam kurun waktu lima tahun. Renstra memberikan arah pembangunan organisasi jangka menengah.
                </p>
                <FileCard title='Rencana Strategis Kementerian Pertanian 2021-2024' fileSize='624 kB' fileLink='/' />
            </div>
            <Divider />
            <div id='rencana2'>
                <Judul3 text='Rencana Kerja Tahunan' />
                <p className="leading-relaxed">
                    Rencana Kerja Tahunan (RKT) merupakan penjabaran dari Renstra, memuat seluruh rencana atau target kinerja yang hendak dicapai dalam satu tahun yang dituangkan dalam sejumlah indikator kinerja strategis yang relevan. Selanjutnya RKT yang telah disesuaikan dengan ketersediaan alokasi anggaran dituangkan dalam dokumen PK.
                </p>
                <div>
                    {
                        rKTahunan.map((data, index) => (
                            <div key={index} className='mt-4'>
                                <FileCard title={data.judul} fileSize={data.ukuran} fileLink={data.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <div id='rencana3'>
                <Judul3 text='Rekapitulasi Rencana Kerja Tahunan (RKT) unit kerja Kementerian Pertanian Tahun 2024' />
                <div>
                    {
                        rKUnit.map((data, index) => (
                            <div key={index} className='mt-4'>
                                <FileCard title={data.judul} fileSize={data.ukuran} fileLink={data.link} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    );
};

export default RencanaKerja;
