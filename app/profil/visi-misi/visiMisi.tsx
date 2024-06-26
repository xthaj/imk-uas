import Judul2 from '@/components/Tittle/judul2';
import Judul3 from '@/components/Tittle/judul3';
import { Divider } from 'antd';
import React from 'react';

const VisiKonten: React.FC = () => {
    return (
        <>
            <header id='visi'>
                <h2 className="text-heading2 lg:text-heading1">Visi dan Misi</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div id='visi'>
                <Judul3 text='Visi' />
                <p className=" leading-relaxed">
                    Berdasarkan Peraturan Presiden Republik Indonesia Nomor 18 Tahun 2020 tentang Rencana Pembangunan Jangka Menengah Nasional (RPJMN) 2020 - 2024, ditetapkan Visi Presiden dan Wakil Presiden RI 2020 - 2024 adalah "Terwujudnya Indonesia Maju yang Berdaulat, Mandiri dan Berkepribadian berlandaskan Gotong Royong". Untuk mendukung Visi tersebut, maka Kementerian Pertanian menetapkan Visi Pertanian Tahun 2020 - 2024, yakni :
                    <br /><br />
                    <strong>
                        Pertanian yang Maju, Mandiri dan Modern untuk Terwujudnya Indonesia Maju yang Berdaulat, Mandiri dan Berkepribadian berlandaskan Gotong Royong</strong>
                </p>
            </div>
            <Divider />
            <div id='visi2'>
                <Judul3 text='Makna dari Visi' />
                <p className=" leading-relaxed">
                    Majunya sektor pertanian ditandai dengan meningkatnya produksi dan produktivitas komoditas pangan serta mampu mencukupi kebutuhan dalam negeri (pangan mandiri) yang pada akhirnya mampu meningkatkan pendapatan petani.
                    <br /><br />
                    Kemajuan dan kemandirian di sektor pertanian diwujudkan dengan peningkatan hasil pengembangan penelitian terapan didukung oleh kualitas SDM dalam menggunakan teknologi modern berbasis kawasan pertanian.
                </p>
            </div>
            <Divider />
            <div id='misi'>
                <Judul3 text='Misi' />
                <p className=" leading-relaxed">
                    Dalam rangka mewujudkan visi ini maka misi Kementerian Pertanian adalah
                    <br /><br />
                    Mewujudkan ketahanan pangan
                    Meningkatkan Nilai Tambah dan Daya Saing Pertanian
                    Pengelolaan Kementerian Pertanian yang bersih, efektif dan terpercaya

                </p>
            </div>
            <Divider />
            <div id='misi2'>
                <Judul3 text='Makna dari Misi' />
                <p className=" leading-relaxed">
                    Ketahanan pangan merupakan kondisi terpenuhinya pangan bagi negara sampai perseorangan yang tercermin dari tersedianya pangan yang cukup ditinjau dari jumlah maupun mutu. Selain itu, menjamin pangan yang aman, beragam, bergizi, merata dan terjangkau serta tidak bertentangan dengan agama, keyakinan dan budaya masyarakat untuk dapat hidup sehat, aktif, dan produktif secara berkelanjutan.
                    <br /><br />
                    Daya saing pertanian adalah kemampuan di sektor pertanian untuk memenuhi kebutuhan masyarakat sekaligus mampu menggantikan produk pesaingnya dengan nilai tambah yang dihasilkan dalam setiap kegiatan produksi dan distribusi komoditas pertanian.

                </p>
            </div>
        </>
    );
};

export default VisiKonten;
