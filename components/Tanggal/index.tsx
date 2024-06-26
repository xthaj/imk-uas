import React from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, Divider } from 'antd';
import type { Dayjs } from 'dayjs';

const getListData = (value: Dayjs) => {
    let listData;
    switch (value.date()) {
        case 5:
            listData = [
                { type: 'success', content: 'Rapat Koordinasi Pengembangan Pertanian Organik' },
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'Pelatihan Petani Muda' },
                { type: 'success', content: 'Launching Program Ketahanan Pangan' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: 'Kunjungan Kerja ke Sentra Pertanian Jawa Timur' },
                { type: 'success', content: 'Seminar Nasional Teknologi Pertanian' },
                { type: 'error', content: 'Deadline Laporan Triwulan' },
            ];
            break;
        case 20:
            listData = [
                { type: 'success', content: 'Pameran Hasil Pertanian Nusantara' },
            ];
            break;
        case 25:
            listData = [
                { type: 'warning', content: 'Rapat Anggaran Tahun Depan' },
                { type: 'success', content: 'Peresmian Pusat Riset Pertanian Modern' },
            ];
            break;
        default:
    }
    return listData || [];
};

const getMonthData = (value: Dayjs) => {
    if (value.month() === 7) { // Agustus
        return 'Bulan Pangan Nasional';
    }
};

const Kalender: React.FC = () => {
    const monthCellRender = (value: Dayjs) => {
        const text = getMonthData(value);
        return text ? (
            <div className="notes-month">
                <section>{text}</section>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
        <>
            <div>
                <Calendar style={{ padding: 10, borderRadius: 20 }} cellRender={cellRender} />
            </div>
        </>
    )
};

export default Kalender;