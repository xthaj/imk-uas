import { convertToKinerja } from "./convertData";
import { dataBerita } from "./dataBerita";
import { dataBuku, dataMagazine } from "./dataMagazine";
import { dataPengumuman } from "./dataPengu";
import { BeritaProps, BukuProps, DataGlobalProps, listKat, MagazineProps, PengumumanProps } from "./dataType";

export const searchGlobalData = (keyword: string): DataGlobalProps[] => {
    const globalData = convertToKinerja();
    return globalData.filter(item => item.judul.toLowerCase().includes(keyword.toLowerCase()));
};

export const searchFilterBerita = (
    keyword: string,
    sort: string,
    kategori: string,
    startDate?: string,
    endDate?: string
): BeritaProps[] => {
    const kategoriList = kategori.toLowerCase() === 'semua' ? listKat : kategori.split(',').map(k => k.trim());

    return dataBerita
        .filter(item => {
            // Filter berdasarkan keyword
            const keywordMatch = item.judul.toLowerCase().includes(keyword.toLowerCase());

            // Filter berdasarkan kategori
            const kategoriMatch = kategoriList.includes(item.kategori);

            // Filter berdasarkan tanggal, hanya jika startDate dan endDate disediakan
            let dateMatch = true;
            if (startDate && endDate) {
                const itemDate = new Date(item.tanggal);
                const start = new Date(startDate);
                const end = new Date(endDate);
                dateMatch = itemDate >= start && itemDate <= end;
            }

            return keywordMatch && kategoriMatch && dateMatch;
        })
        .sort((a, b) => {
            if (sort === 'terbaru') {
                return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
            } else if (sort === 'terlama') {
                return new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime();
            }
            return 0;
        }) as BeritaProps[];
};

export const searchPengumuman = (keyword: string): PengumumanProps[] => {
    return dataPengumuman
        .filter(item => 'nomor' in item && item.judul.toLowerCase().includes(keyword.toLowerCase())) as PengumumanProps[];
};

export const searchBuku = (keyword: string): BukuProps[] => {
    return dataBuku
        .filter(item => item.judul.toLowerCase().includes(keyword.toLowerCase())) as BukuProps[];
};

export const searchFilterMaga = (
    keyword: string,
    sort: string,
    startDate?: string,
    endDate?: string
): MagazineProps[] => {
    return dataMagazine
        .filter(item => {
            // Filter berdasarkan keyword
            const keywordMatch = item.judul.toLowerCase().includes(keyword.toLowerCase());

            // Filter berdasarkan tanggal, hanya jika startDate dan endDate disediakan
            let dateMatch = true;
            if (startDate && endDate) {
                const itemDate = new Date(item.tanggal);
                const start = new Date(startDate);
                const end = new Date(endDate);
                dateMatch = itemDate >= start && itemDate <= end;
            }

            return keywordMatch && dateMatch;
        })
        .sort((a, b) => {
            if (sort === 'terbaru') {
                return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
            } else if (sort === 'terlama') {
                return new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime();
            }
            return 0;
        }) as MagazineProps[];
};
