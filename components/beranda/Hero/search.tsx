import React, { FC } from 'react';
import { Button, Input, Space } from 'antd';
import { SearchOutlined, CloseCircleFilled } from '@ant-design/icons';

const { Search } = Input;

interface CustomSearchProps {
    onSearch: (value: string) => void;
}

const CustomSearch: FC<CustomSearchProps> = ({ onSearch }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Input
                placeholder="Cari di sini"
                style={{
                    width: '70%',
                    height: '50px',
                    marginBottom: '20px',
                    borderRadius: '25px', // Pembulatan sudut
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // Bayangan
                    border: 'none', // Menghilangkan garis tepi
                    fontSize: '16px', // Ukuran font
                    padding: '0 20px', // Jarak antara teks dan tepi input
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            fontSize: '18px', // Ukuran ikon
                            color: '#888', // Warna ikon
                        }}
                    />
                }
                suffix={
                    <CloseCircleFilled
                        style={{
                            fontSize: '18px',
                            color: '#888',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            // Fungsi untuk membersihkan input
                        }}
                    />
                }
            />
        </div>
    );
};

export default CustomSearch;