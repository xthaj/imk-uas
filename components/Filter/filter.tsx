"use client";
import React, { useState } from "react";
import { Button, DatePicker, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CSSTransition } from 'react-transition-group';
import "./index.css";

const FilterBerita: React.FC = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(true);
    const { RangePicker } = DatePicker;

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    // const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     console.log(e);
    // };

    return (

        <div className="containter-filter border rounded-lg p-3 sticky top-20 mt-16">
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
                            placeholder="input with clear icon"
                            allowClear
                            style={{ width: "100%" }}
                        // onChange={onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <h2 className="text-lg mb-1">Pilih tanggal</h2>
                        <DatePicker.RangePicker
                            size="large"
                            placeholder={["Dari", "Hingga sekarang"]}
                            allowEmpty={[false, true]}
                            onChange={(date, dateString) => {
                                console.log(date, dateString);
                            }}
                            style={{ width: "100%" }}
                        />
                    </div>
                    <br />
                    <Button style={{ width: "100%" }} size="large">
                        Tampilkan
                    </Button>
                </div>
            </CSSTransition>
        </div>
        // </div>
    );
};

export default FilterBerita;