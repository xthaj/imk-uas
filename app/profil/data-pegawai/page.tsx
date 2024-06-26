"use client"
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Divider, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { dataPegawai } from '@/utils/pejabat';
import Judul2 from '@/components/Tittle/judul2';

interface Pegawai {
    nama: string;
    fungsi: string;
    jabatan: string;
    email: string;
    grade: string;
    key: string;
}

type DataIndex = keyof Pegawai;

const DataPegawaiPage: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<Pegawai> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '##43A046' : '#ffffff' }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: TableColumnsType<Pegawai> = [
        {
            title: 'Nama',
            dataIndex: 'nama',
            key: 'nama',
            ...getColumnSearchProps('nama'),
            sorter: (a, b) => a.nama.length - b.nama.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Fungsi',
            dataIndex: 'fungsi',
            sorter: (a, b) => a.fungsi.length - b.fungsi.length,
        },
        {
            title: 'Jabatan',
            dataIndex: 'jabatan',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            sorter: (a, b) => a.grade.length - b.grade.length,
        },
    ];

    return (
        <div className=''>
            <div >
                <header id='data-peg'>
                    <h2 className="text-gray-700 text-heading2 lg:text-heading1">Data Pegawai</h2>
                    <Divider style={{ borderTop: '4px solid #8A8817' }} />
                </header>
                <div>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataPegawai}
                        scroll={{ x: true }}
                    />
                </div>

            </div>

        </div>

    )
};

export default DataPegawaiPage;