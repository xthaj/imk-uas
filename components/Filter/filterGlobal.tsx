"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Checkbox, CheckboxProps, Col, ConfigProvider, Input, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CSSTransition } from 'react-transition-group';
import "./index.css";

export const plainOptions = ['Berita', 'Pengumuman', 'Laporan', 'Rencana Kerja', 'Anggaran', 'Lainnya'];

const CheckboxGroup = Checkbox.Group;

interface FilterGlobalProps {
    keyword: string;
    kategori: string[];
}

const FilterGlobal: React.FC<FilterGlobalProps> = ({ keyword, kategori }) => {
    const [isFilterVisible, setIsFilterVisible] = useState(true);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    const [checkedList, setCheckedList] = useState<string[]>(kategori);

    const router = useRouter();

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

    const onChange = (list: string[]) => {
        setCheckedList(list);
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };

    const handleSearch = () => {
        const query = {
            query: searchKeyword,
            kategori: checkAll ? 'all' : checkedList.join(','),
        };
        const queryString = new URLSearchParams(query).toString();
        router.push(`/searchResults?${queryString}`);
    };

    return (
        <div className="containter-filter border rounded-lg p-3 sticky top-20 bg-white">
            <header className="flex justify-between" onClick={toggleFilter}>
                <h2 className="text-lg sm:text-xl font-bold md:text-xl">Filter</h2>
                <DownOutlined />
            </header>
            <CSSTransition
                in={isFilterVisible}
                timeout={300}
                classNames="filter-animation"
                unmountOnExit
            >
                <div className={`isi-filter mt-2 ${isFilterVisible ? "block" : "hidden"}`}>
                    <div className="">
                        <h2 className="text-lg mb-1">Kata Kunci</h2>
                        <Input
                            size="large"
                            placeholder="Cari Sesuatu disini"
                            allowClear
                            style={{ width: "100%" }}
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <ConfigProvider
                            theme={{
                                token: {
                                    fontFamily: 'sans-serif',
                                    fontSize: 14
                                },
                            }}
                        >
                            <h2 className="text-lg mb-1">Pilih Kategori</h2>
                            <Checkbox
                                indeterminate={indeterminate}
                                onChange={onCheckAllChange}
                                checked={checkAll}
                            >
                                Pilih semua
                            </Checkbox>
                            <CheckboxGroup style={{ width: '100%', marginTop: 6 }} value={checkedList} onChange={onChange}>
                                <Row gutter={[0, 4]}>
                                    {plainOptions.map((option, index) => (
                                        <Col span={12} key={option}>
                                            <Checkbox value={option}>{option}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </CheckboxGroup>
                        </ConfigProvider>
                    </div>
                    <br />
                    <Button
                        style={{ width: "100%" }}
                        size="large"
                        onClick={handleSearch}
                    >
                        Tampilkan
                    </Button>
                </div>
            </CSSTransition>
        </div>
    );
};

export default FilterGlobal;
