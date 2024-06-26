"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React, { Suspense } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Providers } from './providers'
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Providers>
            <div className="bg-white text-gray-700 ">
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
