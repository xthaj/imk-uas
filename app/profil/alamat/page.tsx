import React from 'react';
import { Anchor, Divider, Image, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import Judul3 from '@/components/Tittle/judul3';
import FileCard from '@/components/Card/File-unduh';
import { dataAlamat } from '@/utils/dataAlamat';
import { AlamatType } from '@/utils/dataType';



const AlamatPage: React.FC = () => {
    const columns: TableColumnsType<AlamatType> = [
        {
            title: 'Atase',
            dataIndex: 'atase',
        },
        {
            title: 'Nama Pejabat',
            dataIndex: 'pejabat',
        },
        {
            title: 'Alamat Kantor',
            dataIndex: 'alamat',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Fax',
            dataIndex: 'fax',
        },
    ];

    return (
        <div className='mx-auto flex flex-col md:flex-row justify-center'>
            <div className="md:pr-10 md:w-10/12">
                <header id='alamat1'>
                    <h2 className="text-gray-700 text-heading2 lg:text-heading1">Alamat Kementerian</h2>
                    <Divider style={{ borderTop: '4px solid #8A8817' }} />
                </header>
                <div id='alamat1' className=''>
                    <Judul3 text='Alamat Atase' />
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataAlamat}
                        scroll={{ x: true }}
                    />
                    <Divider />
                </div>
                <div id='alamat2'>
                    <Judul3 text='Alamat Pusat dan Daerah' />
                    <div className='w-full'>
                        <p className='text-md'>Daftar Alamat Kantor Pertanian baik Kantor lingkup Kementerian  Pertanian maupun Satuan Kerja Perangkat Daerah pada sektor Pertanian,  Perkebunan, Peternakan dan Ketahanan Pangan dapat diunduh di bawah.</p>

                        <FileCard
                            title="Unduh Alamat Kantor Kementerian"
                            fileSize="200 Kb"
                            fileLink="https://ppid.pertanian.go.id/doc/1/Buku_Daftar_Alamat_2023.pdf"
                        />
                    </div>
                    <div className='pt-4'>
                        <Image src='/alamat.png' />
                    </div>
                </div>
            </div>
            <div className="anchor-profile mt-10 md:w-2/12 md:block hidden">
                <Anchor
                    offsetTop={64}
                    items={[
                        {
                            key: 'alamat1',
                            href: '#alamat1',
                            title: <p className='text-lg'>Alamat Atase</p>,
                        },
                        {
                            key: 'alamat2',
                            href: '#alamat2',
                            title: <p className='text-lg'>Alamat Pusat dan Daerah</p>,
                        },
                    ]}
                />
            </div>
        </div>

    )
};

export default AlamatPage;