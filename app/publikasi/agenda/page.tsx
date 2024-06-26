"use client"
import Kalender from '@/components/Tanggal';
import Judul2 from '@/components/Tittle/judul2';
import { Divider, Image } from 'antd';
import React from 'react';


const AgendaPage: React.FC = () => {

    return (
        <div>
            <header >
                <h2 className="text-heading2 md:text-heading1 mb-2">Agenda</h2>
            </header>
            <Divider style={{ borderTop: '4px solid #8A8817' }} />
            <div>
                <Kalender />
            </div>
        </div>
    );
};

export default AgendaPage;
