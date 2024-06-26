import React from 'react';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className='bg-shade3'>
      <div className=" text-white py-16 px-6 md:px-10 xl:px-24 max-w-[1440px] mx-auto">
        <div className="tracking-wide">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className='w-6/12'>
              <div className="flex items-center mb-8">
                <img src="/logo.png" alt="Logo" className="h-12 mr-4" />
                <div>
                  <h2 className="text-white text-3xl sm:text-3xl md:text-4xl font-bold">Kementerian Pertanian</h2>
                  <p className="text-xl">Republik Indonesia</p>
                </div>
              </div>
              <div className='text-lg'>
                <p className="mb-6">Jl. Harsono RM. No.3, Ragunan, Jakarta 12550</p>
                <p className="mb-6">Whatsapp: 0851-7965-7867</p>
                <p className="">Email: layanan-ip@pertanian.go.if</p>
              </div>
              <div className="flex mt-12">
                <a href="#" className="text-white hover:text-green-400 mr-10">
                  <FacebookOutlined style={{ fontSize: '48px' }} />
                </a>
                <a href="#" className="text-white hover:text-green-400 mr-10">
                  <InstagramOutlined style={{ fontSize: '48px' }} />
                </a>
                <a href="#" className="text-white hover:text-green-400 mr-10">
                  <TwitterOutlined style={{ fontSize: '48px' }} />
                </a>
                <a href="#" className="text-white hover:text-green-400">
                  <YoutubeOutlined style={{ fontSize: '48px' }} />
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-3/12 md:flex md:justify-end">
              <div>
                <h3 className="text-xl font-semibold mb-6 ">Tentang Kami</h3>
                <ul className="text-md space-y-2 md:space-y-5">
                  <li>Profil Kementan</li>
                  <li>Reformasi Birokrasi</li>
                  <li>Lembaga Pendidikan</li>
                  <li>Regulasi</li>
                  <li>Kontak Kami</li>
                  <li>FAQ</li>
                  <li>Perizinan Pertanian</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-3/12 md:flex md:justify-end">
              <div className=''>
                <h3 className="text-xl font-semibold mb-6">Tautan Lainnya</h3>
                <ul className="text-md space-y-2 md:space-y-5">
                  <li>Satu Data Pertanian</li>
                  <li>Perpustakaan</li>
                  <li>Kontak Pengaduan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-4 bg-shade4">
        <p className="text-sm text-[#CAC716]">&copy; 2024 Kementerian Pertanian RI</p>
      </div>
    </footer>
  );
};

export default Footer;