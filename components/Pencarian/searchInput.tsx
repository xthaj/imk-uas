import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useRouter } from 'next/navigation';

interface SearchInputProps {
    initialQuery?: string;
    onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ initialQuery = "", onSearch }) => {
    const [query, setQuery] = useState(initialQuery);

    const handleSearch = () => {
        onSearch(query);
    }

    return (
        <div className='mt-3'>
            <Space.Compact style={{ width: '100%', height: '54px' }}>
                <Input
                    placeholder='Cari...'
                    style={{ fontSize: '24px', padding: '0 1rem', borderRadius: 0 }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onPressEnter={handleSearch}
                />
                <Button
                    style={{ height: '54px', fontSize: '40px', borderRadius: 0, display: 'flex', alignItems: 'center', backgroundColor: '#E2EED9' }}
                    onClick={handleSearch}
                >
                    <SearchOutlined color='white' />
                </Button>
            </Space.Compact>
        </div>
    );
};

export default SearchInput;