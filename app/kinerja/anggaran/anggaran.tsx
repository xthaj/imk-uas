import { dataDipa } from '@/utils/dataAnggaran';
import { rKAnggaran } from '@/utils/dataKinerja';
import FileCard from '@/components/Card/File-unduh';
import Judul3 from '@/components/Tittle/judul3';
import { Divider, Table, TableColumnsType } from 'antd';
import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { DipaProps } from '@/utils/dataType';

const AnggaranKonten: React.FC = () => {

    const columns: TableColumnsType<DipaProps> = [
        {
            title: 'Unit Kerja',
            dataIndex: 'judul',
        },
        {
            title: '2020',
            dataIndex: 't_2020',
            render: (text) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href={text} target="_blank" rel="noopener noreferrer">
                        <LinkOutlined />
                    </Link>
                </div>
            ),
        },
        {
            title: '2021',
            dataIndex: 't_2021',
            render: (text) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Link href={text} target="_blank" rel="noopener noreferrer">
                        <LinkOutlined />
                    </Link>
                </div>
            ),
        },
        {
            title: '2022',
            dataIndex: 't_2022',
            render: (text) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Link href={text} target="_blank" rel="noopener noreferrer">
                        <LinkOutlined />
                    </Link>
                </div>
            ),
        },
        {
            title: '2023',
            dataIndex: 't_2023',
            render: (text) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Link href={text} target="_blank" rel="noopener noreferrer">
                        <LinkOutlined />
                    </Link>
                </div>
            ),
        },
        {
            title: '2024',
            dataIndex: 't_2024',
            render: (text) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Link href={text} target="_blank" rel="noopener noreferrer">
                        <LinkOutlined />
                    </Link>
                </div>
            ),
        },
    ];


    return (
        <>
            <header id='dipa'>
                <h2 className=" text-heading2 lg:text-heading1">Anggaran Kementerian</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div id='dipa'>
                <Judul3 text='DIPA' />
                <p className="leading-relaxed">
                    Daftar Isian Pelaksanaan Anggaran (DIPA) merupakan merupakan informasi publik yang wajib disediakan dan diumumkan secara berkala. DIPA Kementerian Pertanian disajikan dalam bentuk tabel dibawah ini.
                </p>
                <div className='mt-4'>

                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataDipa}
                        scroll={{ x: true }}
                    />
                </div>
            </div>
            <Divider />
            <div id='rka'>
                <Judul3 text='Rencana Kerja dan Anggaran' />
                <p className="leading-relaxed">
                    Rencana Kerja dan Anggaran yaitu data rencana kerja yang merupakan turunan dari Rencana Strategis dan diinput ke aplikasi KRISNA (Kolaborasi Perencanaan dan Informasi Kinerja Anggaran) yang merupakan aplikasi e-planning terintegrasi antara Bappenas, Kementerian PAN-RB dan Kementerian Keuangan.
                </p>
                <div>
                    {
                        rKAnggaran.map((data, index) => (
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

export default AnggaranKonten;
