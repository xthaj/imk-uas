import React from 'react';
import { Menu} from 'antd';
import { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LeftMenuProps {
    mode: MenuProps['mode'];
}

const LeftMenu: React.FC<LeftMenuProps> = ({ mode }) => {

    const pathname = usePathname();

    const getSelectedKeys = (): string[] => {
        if (pathname === '/') return ['beranda'];
        if (pathname.startsWith('/profil')) return ['profil', pathname.split('/')[2]];
        if (pathname.startsWith('/kinerja')) return ['kinerja', pathname.split('/')[2]];
        if (pathname.startsWith('/basis-data')) return ['basis-data'];
        if (pathname.startsWith('/publikasi')) return ['publikasi', pathname.split('/')[2]];
        if (pathname.startsWith('/informasi-publik')) return ['informasi', pathname.split('/')[2]];
        return [];
    };

    const items: MenuProps['items'] = [
        {
            label: (
                <Link href="/">Beranda</Link>
            ),
            key: 'beranda',
            // icon: <HomeOutlined />,
        },
        {
            label: (
                <span>
                    Profil
                    {mode === 'horizontal' && <DownOutlined style={{ marginLeft: '8px' }} />}
                </span>
            ),
            key: 'profil',
            // icon: <TeamOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Kementerian',
                    children: [
                        {
                            label: <Link href="/profil/sejarah">Sejarah</Link>,
                            key: 'sejarah'
                        },
                        {
                            label: <Link href="/profil/visi-misi">Visi dan Misi</Link>,
                            key: 'visi'
                        },
                        {
                            label: <Link href="/profil/tugas">Tugas dan Fungsi</Link>,
                            key: 'tugas'
                        },
                        {
                            label: <Link href="/profil/struktur">Struktur</Link>,
                            key: 'struktur'
                        },
                        {
                            label: <Link href="/profil/lambang">Lambang</Link>,
                            key: 'lambang'
                        },
                        {
                            label: <Link href="/profil/data-pegawai">Data Pegawai</Link>,
                            key: 'data-pegawai'
                        },
                        {
                            label: <Link href="/profil/portal">Unit Kerja</Link>,
                            key: 'unit-kerja'
                        },
                    ]
                },

                {
                    type: 'divider',
                },
                {
                    key: 'alamat',
                    label: <Link href="/profil/alamat">Alamat</Link>,
                },
            ]
        },
        {
            label: (
                <span>
                    Kinerja
                    {mode === 'horizontal' && <DownOutlined style={{ marginLeft: '8px' }} />}
                </span>
            ),
            key: 'kinerja',
            // icon: <DownOutlined />,
            children: [
                {
                    label: <Link href="/kinerja/rencana-kerja">Rencana Kerja</Link>,
                    key: 'rencana-kerja'
                },
                {
                    label: <Link href="/kinerja/anggaran">Anggaran</Link>,
                    key: 'anggaran'
                },
                { label: <Link href="/kinerja/laporan">Laporan</Link>, key: 'laporan' },
                { label: <Link href="/kinerja/ikm">Indeks Kepuasan Masyarakat</Link>, key: 'indeks-kepuasan' },
            ]
        },
        {
            label: <Link href="/basis-data">Basis Data</Link>,
            key: 'basis-data',
            // icon: <DatabaseOutlined />,
        },
        {
            label: (
                <span>
                    Publikasi
                    {mode === 'horizontal' && <DownOutlined style={{ marginLeft: '8px' }} />}
                </span>
            ),
            key: 'publikasi',
            // icon: <InsertRowAboveOutlined />,
            children: [
                {
                    label: <Link href="/publikasi/berita">Berita</Link>,
                    key: 'berita'
                },
                {
                    label: <Link href="/publikasi/magazine">E-Magazine</Link>,
                    key: 'magazine'
                },
                { label: <Link href="/publikasi/buku">Buku</Link>, key: 'buku' },

                { label: <Link href="/publikasi/agenda">Agenda</Link>, key: 'agenda' },
            ]
        },
        {
            key: 'informasi',
            label: (
                <span>
                    Informasi Publik
                    {mode === 'horizontal' && <DownOutlined style={{ marginLeft: '8px' }} />}
                </span>
            ),
            // icon: <BookOutlined />,
            children: [
                { label: <Link href="/informasi-publik/sk-dip">SK DIP</Link>, key: 'sk-dip' },
                { label: <Link href="/informasi-publik/lhk">Laporan Kekayaan</Link>, key: 'lhk' },
                // { label: 'PPID', key: 'ppid' },
                { label: <Link href="/informasi-publik/pengaduan">Pengaduan</Link>, key: 'pengaduan' },
                // {
                //     label: 'PMK', key: 'pmk', type: 'group',
                //     children: [
                //         { label: 'Buku Saku', key: 'buku-saku' },
                //         { label: 'Materi Pengendalian', key: 'pengendalian' },
                //     ]
                // },
            ]
        }
    ];

    return <Menu
        style={{ fontSize: '16px', fontFamily: 'sans-serif' }}
        mode={mode} items={items} selectedKeys={getSelectedKeys()} />;
};

export default LeftMenu;
