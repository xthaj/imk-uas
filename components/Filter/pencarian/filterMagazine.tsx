import React, { useState, useEffect } from 'react';
import { Select, DatePicker, Button } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import dayjs, { Dayjs } from 'dayjs';
import { listKat } from '@/utils/dataType';

const { Option } = Select;
const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

interface FilterMagazineProps {
    query: string;
    onApplyFilter: (params: URLSearchParams) => void;
}

const FilterMagazine: React.FC<FilterMagazineProps> = ({ query, onApplyFilter }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [sort, setSort] = useState(searchParams.get('sort') || 'terbaru');
    // const [categories, setCategories] = useState<string[]>(searchParams.get('kat')?.split(',').filter(Boolean) || []);
    const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);

    useEffect(() => {
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');

        if (startDate && endDate) {
            setDateRange([
                dayjs(startDate, dateFormat),
                dayjs(endDate, dateFormat)
            ]);
        } else {
            setDateRange([null, null]);
        }
    }, [searchParams]);

    const handleApplyFilter = () => {
        const params = new URLSearchParams();
        params.set('sort', sort);
        if (dateRange[0] && dateRange[1]) {
            params.set('startDate', dateRange[0].format(dateFormat));
            params.set('endDate', dateRange[1].format(dateFormat));
        }
        if (query) {
            params.set('query', query);
        }
        router.push(`?${params.toString()}`);
        onApplyFilter(params);
    };

    const handleResetFilter = () => {
        setSort('terbaru');
        // setCategories(['semua']);
        setDateRange([null, null]);
        const params = new URLSearchParams();
        if (query) {
            params.set('query', query);
        }
        params.set('sort', sort);
        params.set('kat', 'semua')
        router.push(`${window.location.pathname}?${params.toString()}`);
    };

    const onDateChange = (dates: [Dayjs | null, Dayjs | null] | null, dateStrings: [string, string]) => {
        console.log(dates, dateStrings);
        setDateRange(dates || [null, null]);
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
                <div className="flex flex-col flex-grow md:w-1/2">
                    <label className="mb-2 text-lg font-semibold">Urutkan berdasarkan</label>
                    <Select value={sort} onChange={setSort} size='large'>
                        <Option value="terbaru">Terbaru</Option>
                        <Option value="terlama">Terlama</Option>
                        {/* <Option value="relevan">Relevan</Option> */}
                    </Select>
                </div>

                <div className="flex flex-col flex-grow md:w-1/2">
                    <label className="mb-2 text-lg font-semibold">Tanggal</label>
                    <RangePicker
                        value={dateRange}
                        onChange={onDateChange}
                        format={dateFormat}
                        size='large'
                    />
                </div>
            </div>
            <div className="flex justify-end ">
                <div className='flex space-x-4'>
                    <Button onClick={handleResetFilter} size="large">Reset Filter</Button>
                    <Button type="primary" onClick={handleApplyFilter} size="large">Terapkan Filter</Button>

                </div>
            </div>
        </div>
    );
};

export default FilterMagazine;