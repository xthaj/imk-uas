import { lKEselon, lKeuangan, lKinerja, lTahunan, lTPpid } from '@/utils/dataKinerja';
import FileCard from '@/components/Card/File-unduh';
import Judul3 from '@/components/Tittle/judul3';
import { Divider } from 'antd';
import React from 'react';

const LaporanKonten: React.FC = () => {
    return (
        <>
            <header id='laporan1'>
                <h2 className="text-gray-700 text-heading2 lg:text-heading1">Laporan Kementerian</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div id='laporan1'>
                <Judul3 text='Laporan Keuangan' />
                <p className="leading-relaxed">
                    Laporan Keuangan adalah catatan informasi keuangan Kementerian Pertanian pada suatu periode akuntansi yang dapat digunakan untuk menggambarkan kinerja Kementerian Pertanian.
                </p>
                <div>
                    {
                        lKeuangan.map((data, index) => (
                            <div key={index} className='mt-4'>
                                <FileCard title={data.judul} fileSize={data.ukuran} fileLink={data.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <div id='laporan2'>
                <Judul3 text='Laporan Tahunan' />
                <p className="leading-relaxed">
                    Laporan Tahunan merupakan laporan perkembangan dan pencapaian yang berhasil diraih oleh Kementerian Pertanian dalam setahun.
                </p>
                <div>
                    {
                        lTahunan.map((data, index) => (
                            <div key={index} className='mt-4'>
                                <FileCard title={data.judul} fileSize={data.ukuran} fileLink={data.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <div id='laporan3'>
                <Judul3 text='Laporan Tahunan PPID' />
                <p className="leading-relaxed">
                    Laporan Tahunan Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kementerian Pertanian merupakan kinerja PPID Utama dalam memberikan layanan informasi publik kepada masyarakat.
                </p>
                <div>
                    {
                        lTPpid.map((data, index) => (
                            <div key={index} className='mt-4'>
                                <FileCard title={data.judul} fileSize={data.ukuran} fileLink={data.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <div id='laporan4'>
                <Judul3 text='Laporan Kinerja' />
                <p className="leading-relaxed">
                    Laporan Kinerja (LAKIN) adalah dokumen yang berisi gambaran perwujudan AKIP yang disusun dan disampaikan secara sistematik dan melembaga. Penyusunan LAKIN dilakukan melalui proses pengukuran kinerja dan pengukuran pencapaian sasaran. Hasil LAKIP harus dapat dievaluasi dan ditindaklanjuti untuk kemudian disampaikan kepada pihak-pihak yang berkepentingan. LAKIN yang disajikan di dalam website ini mencakup LAKIN Kementerian Pertanian dan LAKIN dari 9 Eselon 1 Lingkup Kementerian Pertanian
                </p>
                <div>
                    {
                        lKinerja.map((data, index) => (
                            <div key={index} className='mt-4'>
                                <FileCard title={data.judul} fileSize={data.ukuran} fileLink={data.link} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <div id='laporan5'>
                <Judul3 text='Laporan Kinerja Eselon I Lingkup Kementerian Pertanian TA 2023' />
                <div>
                    {
                        lKEselon.map((data, index) => (
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

export default LaporanKonten;
