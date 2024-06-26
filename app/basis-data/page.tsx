"use client"
import { Chart } from 'react-google-charts';
import { Cascader, CascaderProps, Divider, Table, TableColumnsType } from 'antd';
import React from 'react';
import { Select, DatePicker, Button } from 'antd';
import { Basdat2Type, BasdatType } from "@/utils/dataType";
import Link from "next/link";
import dayjs from "dayjs";
import { dataBasdat } from "@/utils/dataBasdat";
import { dataBasdat2 } from "@/utils/dataBasdat2";

const { Option } = Select;
const { RangePicker } = DatePicker;

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

// Options buat indikator
const options: Option[] = [
    {
        value: 'tanaman_pangan',
        label: 'Tanaman Pangan',
        children: [
            {
                value: 'jagung',
                label: 'Jagung',
            },
            {
                value: 'kacang_hijau',
                label: 'Kacang Hijau',
            },
            {
                value: 'padi',
                label: 'Padi',
            },
        ],
    },
    {
        value: 'hortikultura',
        label: 'Hortikultura',
        children: [
            {
                value: 'adenium',
                label: 'Adenium',
            },
            {
                value: 'aglaonema',
                label: 'Aglaonema',
            },
            {
                value: 'alpukat',
                label: 'Alpukat',
            },
        ],
    },
    {
        value: 'perkebunan',
        label: 'Perkebunan',
        children: [
            {
                value: 'cengkeh',
                label: 'Cengkeh',
            },
            {
                value: 'jambu_mete',
                label: 'Jambu Mete',
            },
            {
                value: 'kakao',
                label: 'Kakao',
            },
        ],
    },
    {
        value: 'peternakan',
        label: 'Peternakan',
        children: [
            {
                value: 'ayam_buras',
                label: 'Ayam Buras',
            },
            {
                value: 'ayam_ras_pedaging',
                label: 'Ayam Ras Pedaging',
            },
            {
                value: 'babi',
                label: 'Babi',
            },

        ],
    },
];

// options buat level
const options2: Option[] = [
    {
        value: 'nasional',
        label: 'Nasional',
        children: [
            {
                value: 'provinsi',
                label: 'Provinsi',
                children: [
                    {
                        value: 'jakarta',
                        label: 'DKI Jakarta',
                        children: [
                            {
                                value: 'kepseribu',
                                label: 'Kab. Kepulauan Seribu',
                            },
                            {
                                value: 'jakbar',
                                label: 'Kota Jakarta Barat',
                            },
                            {
                                value: 'jakpus',
                                label: 'Kota Jakarta Pusat',
                            },
                            {
                                value: 'jaksel',
                                label: 'Kota Jakarta Selatan',
                            },
                        ],
                    },
                    {
                        value: 'jawabarat',
                        label: 'Jawa Barat',
                        children: [
                            {
                                value: 'bandung',
                                label: 'Kota Bandung',
                            },
                            {
                                value: 'bekasi',
                                label: 'Kota Bekasi',
                            },
                            {
                                value: 'depok',
                                label: 'Kota Depok',
                            },
                            {
                                value: 'bogor',
                                label: 'Kab. Bogor',
                            },
                        ],
                    },
                    {
                        value: 'jawatimur',
                        label: 'Jawa Timur',
                        children: [
                            {
                                value: 'surabaya',
                                label: 'Kota Surabaya',
                            },
                            {
                                value: 'malang',
                                label: 'Kota Malang',
                            },
                            {
                                value: 'sidoarjo',
                                label: 'Kab. Sidoarjo',
                            },
                            {
                                value: 'gresik',
                                label: 'Kab. Gresik',
                            },
                        ],
                    },
                ],
            }
        ],
    }
];

const onChange: CascaderProps<Option>['onChange'] = (value) => {
    console.log(value);
};

const CascaderWithParentAllowed: React.FC = () => (
    <Cascader
        options={options2}
        onChange={onChange}
        size="large"
        defaultValue={['nasional']}
        changeOnSelect
        style={{ width: '100%' }}
    />
);

const CascaderWithoutParentAllowed: React.FC = () => (
    <Cascader
        options={options}
        onChange={onChange}
        size="large"
        defaultValue={['tanaman_pangan', 'padi']}
        style={{ width: '100%' }}
    />
);

const handleResetFilter = () => {
    window.location.reload();
};

const data_map = [
    ['Provinsi', 'Produksi Padi (ton)'],
    ['Aceh', 1646941.44],
    ['Sumatera Utara', 2068481.33],
    ['Sumatera Barat', 1421092.02],
    ['Riau', 229653.87],
    ['Jambi', 321871.07],
    ['Sumatera Selatan', 2750155.69],
    ['Bengkulu', 286254.72],
    ['Lampung', 2539088.6],
    ['Bangka-Belitung', 58374.15],
    ['Kepulauan Riau', 797.71],
    [{ v: 'ID-JK', f: 'Jakarta' }, 3510.65],
    ['Jawa Barat', 9248606.09],
    ['Jawa Tengah', 9617269.44],
    ['Yogyakarta', 537358.85],
    ['Jawa Timur', 9792575],
    ['Banten', 1648628.27],
    ['Bali', 622328.03],
    ['Nusa Tenggara Barat', 1431792.21],
    [{ v: 'ID-NT', f: 'Nusa Tenggara Timur' }, 781903.75],
    [{ v: 'ID-KB', f: 'Kalimantan Barat' }, 761528.78],
    ['Kalimantan Tengah', 412028.62],
    ['Kalimantan Selatan', 903540.61],
    ['Kalimantan Timur', 248350.36],
    [{ v: 'ID-KU', f: 'Kalimantan Utara' }, 32683],
    ['Sulawesi Utara', 262375.64],
    ['Sulawesi Tengah', 832820.11],
    ['Sulawesi Selatan', 5173740.18],
    ['Sulawesi Tenggara', 513291.82],
    ['Gorontalo', 242389.64],
    ['Sulawesi Barat', 319619.22],
    [{ v: 'ID-MA', f: 'Maluku' }, 102382.33],
    ['Maluku Utara', 34929.27],
    [{ v: 'ID-PB', f: 'Papua Barat' }, 25457.78],
    ['Papua', 216901.27]
];

const options_map = {
    region: 'ID',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: {
        colors: ['#ff4c4c', '#FAB733', '#69B34C'], // Red to Yellow to Green
        minValue: 797.71, // Minimum value for the color gradient
        maxValue: 9792575, // Maximum value for the color gradient (adjust as needed)
    },
    backgroundColor: 'transparent',
    datalessRegionColor: '#ffffff',
    defaultColor: '#f5f5f5',
};


const data_bar = [
    ['Tahun', 'Produksi (ton)'],  // Adding headers to match Google Charts format
    ['2018', 59200533.72],
    ['2019', 54604033.34],
    ['2020', 54649202.24],
    ['2021', 53776236.17],
    ['2022', 54338410.44],
    ['2023', 53963913.2]
];

const options_bar = {
    hAxis: {
        title: 'Tahun'
    },
    vAxis: {
        title: 'Produksi (ton)',
        minValue: 0  // Ensure y-axis starts at 0
    },
    bar: {
        groupWidth: "95%"
    },
    legend: { position: 'none' },
    colors: ['#388e3b']
};

const data_line = [
    ['Tahun', 'Produksi (ton)'],  // Adding headers to match Google Charts format
    ['2018', 59200533.72],
    ['2019', 54604033.34],
    ['2020', 54649202.24],
    ['2021', 53776236.17],
    ['2022', 54338410.44],
    ['2023', 53963913.2]
];

const data_bar2 = [
    ['Provinsi', 'Kontribusi Produksi Padi (Persen)'],  // Headers
    ['Jawa Timur', 17.78],    // Example data points
    ['Jawa Tengah', 17.46],
    ['Jawa Barat', 16.79],
    ['Sulawesi Selatan', 9.40],
    ['Sumatera Selatan', 5],
    ['Lampung', 4.61],
    ['Sumatera Utara', 3.75],
    ['Banten', 3],
    ['Aceh', 2.99],
    ['Nusa Tenggara Barat', 2.60],
    ['Provinsi Lainnya', 16.65]
];


const options_line = {
    title: 'Produksi Beras Indonesia (ton) per Tahun',
    hAxis: {
        title: 'Tahun'
    },
    vAxis: {
        title: 'Produksi (ton)',
        minValue: 0  // Ensure y-axis starts at 0
    },
    colors: ['#388e3b']
};

const options_bar2 = {
    hAxis: {
        title: 'Tahun'
    },
    vAxis: {
        title: 'Produksi (ton)',
        minValue: 0  // Ensure y-axis starts at 0
    },
    legend: { position: 'none' },
    height: 500,
    colors: ['#388e3b']
};

const handleButtonClick = () => {
    alert('Preview - fitur sebenarnya belum diimplementasikan.');
};

const columns: TableColumnsType<{ key: string; provinsi: string; '2018': number; '2019': number; '2020': number; '2021': number; '2022': number; '2023': number }> = [
    {
        title: 'Provinsi',
        dataIndex: 'provinsi',
    },
    {
        title: '2018',
        dataIndex: '2018',
    },
    {
        title: '2019',
        dataIndex: '2019',
    },
    {
        title: '2020',
        dataIndex: '2020',
    },
    {
        title: '2021',
        dataIndex: '2021',
    },
    {
        title: '2022',
        dataIndex: '2022',
    },
    {
        title: '2023',
        dataIndex: '2023',
    },
];

const BasisDataPage: React.FC = () => {
    return (
        <div>
            <header >
                <h2 className="text-heading2 md:text-heading1 mb-2">Visualisasi Statistik Pertanian</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />

            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">

                    <div className="flex flex-col flex-grow md:w-1/3">
                        <label className="mb-2 text-lg font-semibold">Indikator</label>
                        <CascaderWithoutParentAllowed />
                    </div>

                    <div className="flex flex-col flex-grow md:w-1/3">
                        <label className="mb-2 text-lg font-semibold">Level</label>
                        <CascaderWithParentAllowed />
                    </div>

                    <div className="flex flex-col flex-grow md:w-1/3">
                        <label className="mb-2 text-lg font-semibold">Tanggal</label>
                        <RangePicker picker="year" size='large' defaultValue={[
                            dayjs('2020-01-01', 'YYYY-MM-DD'),
                            dayjs('2024-01-01', 'YYYY-MM-DD')
                        ]} />
                    </div>

                </div>
                <div className="flex justify-end ">
                    <div className='flex space-x-4'>
                        <Button size="large">Reset Filter</Button>
                        <Button type="primary" size="large" onClick={handleButtonClick}>Cari Data</Button>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col items-center">

                {/* GeoChart */}
                <div className="w-full max-w-screen-lg md:w-11/12 lg:w-10/12 xl:w-9/12 mb-8 md:mb-12">
                    <h2 className="text-lg font-semibold mb-4">Peta Sebaran Produksi Padi (dalam ton)</h2>
                    <h3 className="mb-2">Rata-rata tahun 2018-2023</h3>
                    <Chart
                        chartType="GeoChart"
                        data={data_map}
                        options={options_map}
                        width={1000} // Set as a number
                        height={400} // Set as a number
                        legendToggle
                    />

                    <Button size="large" onClick={handleButtonClick}>Download Grafis</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-screen-lg md:w-11/12 lg:w-10/12 xl:w-9/12 mb-8 md:mb-12">
                    <div className="w-full">
                        <h2 className="text-lg font-semibold mb-4">Produksi Padi 2018-2023</h2>
                        <Chart
                            chartType="ColumnChart"
                            data={data_bar}
                            options={options_bar}
                            legendToggle
                        />
                        <Button size="large" onClick={handleButtonClick}>Download Grafis</Button>
                    </div>

                    <div className="w-full">
                        <h2 className="text-lg font-semibold mb-4">Luas Panen Padi 2018-2023</h2>
                        <Chart
                            chartType="LineChart"
                            data={data_line}
                            options={options_line}
                            legendToggle
                        />
                        <Button size="large" onClick={handleButtonClick}>Download Grafis</Button>
                    </div>
                </div>

                <div className="w-full max-w-screen-lg md:w-11/12 lg:w-10/12 xl:w-9/12 mb-8 md:mb-12">
                    <h2 className="text-lg font-semibold mb-4">Produksi Padi per Provinsi 2018-2023</h2>
                    <Chart
                        chartType="BarChart"
                        data={data_bar2}
                        options={options_bar2}
                        legendToggle
                    />
                    <Button size="large" onClick={handleButtonClick}>Download Grafis</Button>
                </div>




            </div>
            <div className="w-full mb-8 md:mb-12">
                <Table
                    columns={columns}
                    dataSource={dataBasdat2}
                    scroll={{ x: true }}
                />
                <Button size="large" onClick={handleButtonClick}>Download Data</Button>
            </div>
        </div>
    );
};

export default BasisDataPage;
