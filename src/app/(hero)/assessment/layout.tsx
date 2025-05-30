"use client"
import Link from "next/link";
import {useState} from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)

  return (
    <div className='mx-auto mt-10 w-1/2 border-2 border-dashed border-black p-4' >
        <div className='mb-4 flex gap-4 text-lg font-bold text-purple-500'>
          <Link href='/assessment/about'>About</Link>
          <Link href='/assessment/settings'>Settings</Link>
        </div>
        <h2>DashBorad Layout {count}</h2>
        <button className='my-4 rounded-md bg-black p-2 text-white' onClick={()=>setCount(count+1)}>Increment</button>

        {children}
    </div>

  );
}