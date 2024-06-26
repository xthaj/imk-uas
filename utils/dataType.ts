
export interface PengumumanProps {
    judul: string;
    nomor: string;
    link: string;
    deskripsi: string;
    gambar: string;
}

export interface AlamatType {
    key: React.Key;
    atase: string;
    pejabat: string;
    alamat: string;
    email: String;
    phone: String;
    fax: String;
}

export interface DipaProps {
    judul: string;
    t_2020: string;
    t_2021: string;
    t_2022: string;
    t_2023: string;
    t_2024: string;
    ukuran: string;
}

export interface FileProps {
    judul: string;
    ukuran?: string | null;
    link: string;
    kategori?: string | null;
}


export interface BeritaProps {
    tanggal: Date;
    author?: string | null;
    judul: string;
    deskripsi: string;
    ringkasan: string;
    gambar: string;
    kategori: 'Agenda' | 'Unit Kerja' | 'Siaran Pers' | 'Pengumuman' | 'Pendaftaran Varietas' | 'Perlindungan Varietas' | 'Iptek';
    link?: string | null;
    nomor?: string | null;
}


export interface PvtProps {
    judul: string;
    tanggal: Date;
    gambar: string;
    link: string;
}

export interface DataGlobalProps {
    judul: string;
    gambar: string;
    link?: string;
    tipe: 'Laporan' | 'Rencana Kerja' | 'Anggaran' | 'Lainnya';
}

export interface BukuProps {
    judul: string;
    gambar: string;
    link: string;
}

export interface MagazineProps {
    judul: string;
    gambar: string;
    link: string;
    tanggal: Date;
}

export interface BasdatType {
    key: string;
    Komoditas: string;
    Satuan: string;
    '2020': number;
    '2021': number;
    '2022': number;
    '2023': number;
    '2024': number;
}

export interface Basdat2Type {
    key: string;
    Komoditas: string;
    Satuan: string;
    '2020': number;
    '2021': number;
    '2022': number;
    '2023': number;
    '2024': number;
}

export const listKat = ['Agenda', 'Unit Kerja', 'Siaran Pers', 'Pengumuman', 'Pendaftaran Varietas', 'Perlindungan Varietas', 'Iptek'];