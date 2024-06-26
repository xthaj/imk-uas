'use client';
import React from 'react';
import { Anchor, Divider, Image, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { lkhpn } from '@/utils/dataInformasiPublik';
import { FileProps } from '@/utils/dataType';
import Link from 'next/link';
import { LinkOutlined } from '@ant-design/icons';

const AlamatPage: React.FC = () => {
    const columns: TableColumnsType<FileProps> = [
        {
            title: 'Nama Jabatan',
            dataIndex: 'judul',
            sorter: (a, b) => a.judul.localeCompare(b.judul),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Unit Kerja',
            dataIndex: 'kategori',
            filters: Array.from(new Set(lkhpn.map(item => item.kategori)))
                .filter((kategori): kategori is string => kategori !== null && kategori !== undefined)
                .map(kategori => ({ text: kategori, value: kategori })),
            onFilter: (value, record) => record.kategori === value,
        },
        {
            title: 'Tautan LHKPN',
            dataIndex: 'link',
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
        <div className='mx-auto'>
            <header id='alamat1'>
                <h2 className="text-gray-700 text-heading2 lg:text-heading1">Laporan Hasil Kekayaan</h2>
                <Divider style={{ borderTop: '4px solid #8A8817' }} />
            </header>
            <Table
                bordered
                columns={columns}
                dataSource={lkhpn}
                scroll={{ x: true }}
            />
        </div>
    )
};

export default AlamatPage;