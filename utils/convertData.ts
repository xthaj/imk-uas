import { dipa } from "./dataAnggaran";
import { dataBerita } from "./dataBerita";
import { iKepuasan, lKEselon, lKeuangan, lKinerja, lTahunan, lTPpid, rKAnggaran, rKTahunan, rKUnit } from "./dataKinerja";
import { dataPengumuman } from "./dataPengu";
import { BeritaProps, DataGlobalProps, FileProps, PengumumanProps } from "./dataType";


export const convertToKinerja = (): DataGlobalProps[] => {
    let globalData: DataGlobalProps[] = [];

    // Konversi data anggaran
    globalData = globalData.concat(dipa.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Anggaran'
    })));

    globalData = globalData.concat(iKepuasan.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Lainnya'
    })));


    globalData = globalData.concat(lKEselon.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Laporan'
    })));


    globalData = globalData.concat(lKeuangan.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Laporan'
    })));


    globalData = globalData.concat(lKinerja.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Laporan'
    })));


    globalData = globalData.concat(lTahunan.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Laporan'
    })));


    globalData = globalData.concat(lTPpid.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Laporan'
    })));


    globalData = globalData.concat(rKAnggaran.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Anggaran'
    })));


    globalData = globalData.concat(rKTahunan.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Rencana Kerja'
    })));


    globalData = globalData.concat(rKUnit.map((item: FileProps) => ({
        judul: item.judul,
        gambar: '/pdf.webp',
        link: item.link,
        tanggal: undefined,
        tipe: 'Rencana Kerja'
    })));



    return globalData;
};
