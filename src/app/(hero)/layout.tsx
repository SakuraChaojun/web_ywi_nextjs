import "../globals.css"
import Header from "@/app/(hero)/components/Header";
import MiddlePart from "@/app/(hero)/components/MiddlePart";
import Footer from '@/app/(hero)/components/Footer'
import React from 'react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className='mx-auto'>
        <Header/>
        <MiddlePart/>
        <Footer></Footer>

        {children}
    </div>
  );
}
