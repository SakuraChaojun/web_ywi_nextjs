"use client"
import Link from "next/link";
import {useState} from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div>

        {children}
    </div>

  );
}