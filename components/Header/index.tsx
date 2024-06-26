import React, { useState, useEffect } from 'react';
import { Layout, Button, Drawer } from 'antd';
import LeftMenu from './leftMenu';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import './index.css';

const Navbar: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };

    return (
        <nav className="navbar">
            <div className='px-6 md:px-14 lg:px-24 max-w-[1440px] mx-auto my-0'>
                <Layout.Header className="nav-header" style={{ backgroundColor: 'white', padding: '0', }}>
                    <Link href="/"
                    >
                        <div className="logo h-full" style={{ display: 'flex', alignItems: 'center', height: '100%', }}>
                            <img src="/logo.png" alt="Logo" width={30} height={30} />
                            <span className="ml-3 text-gray-700 text-lg font-semibold">Kementerian Pertanian</span>
                        </div>
                    </Link>
                    <div className="navbar-menu">
                        <div className="leftMenu">
                            <LeftMenu mode="horizontal" />
                        </div>
                        <div className='btn-drawer'>
                            <Button className='menuButton' type="text" onClick={showDrawer}>
                                <MenuOutlined />
                            </Button>
                        </div>
                        <Drawer
                            title="Kementerian Pertanian"
                            placement="right"
                            closable={true}
                            onClose={showDrawer}
                            open={visible}
                            style={{ zIndex: 99999 }}
                        >

                            <LeftMenu mode="inline" />
                        </Drawer>
                    </div>
                </Layout.Header>
            </div>
        </nav>
    );
};

export default Navbar;
