"use client";
import React from 'react';
import { Button, Card, Col, Layout, Row, Typography, Space, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import Hero from "@/components/beranda/Hero";
import Kalender from '@/components/Tanggal';
import BeritaBaru from '@/components/beranda/berita';
import BeritaCarousel from '@/components/beranda/berita/carousel';
import PenguBaru from '@/components/beranda/pengumuman';
import JelajahiData from '@/components/beranda/jelajah';
import PvtBerita from '@/components/beranda/pvt';
import MaxWLayout from './MaxWLayout';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <div className='bg-white '>

      <Hero />
      <MaxWLayout>
        <BeritaBaru />
        <PenguBaru />
        <PvtBerita />
      </MaxWLayout>
      <div className='bg-[#152C30] mt-20'>
        <JelajahiData />

      </div>
    </div>
  );
}
