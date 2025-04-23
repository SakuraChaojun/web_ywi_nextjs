"use client"
import "../globals.css"
import Header from '@/app/(hero)/components/header'
import React from 'react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <Header/>
        {children}
    </>
  );
}
