'use client'
import {usePathname} from "next/navigation";
import Image from "next/image";
import logo from "@/app/(hero)/assets/logo.png";
import Link from "next/link";
import {Button} from "antd";
import {SearchOutlined, TranslationOutlined} from "@ant-design/icons";
import React from "react";

export default function Nav() {

    const pathname = usePathname()
    const linkData: { name: string, path: string }[] = [
        {name: '首页', path: '/'},
        {name: '打分', path: '/assessment'},
        {name: '资讯', path: '/news'},
        {name: '视频', path: '/video'},
        {name: '项目', path: '/project'},
        {name: '费用', path: '/expense'},
        {name: '关于', path: '/about'}
    ];

    return (

        <div className=' bg-[#F7F9FE]  '>

            <div className='md:hidden bg-[#F7F9FE] w-1/2 h-16 duration-300'>

            </div>

            <div className=' hidden md:flex md:h-20  md:w-10/12 md:mx-auto  duration-300'>

                <div className='mt-4  '>
                    <Image className='cursor-pointer' src={logo} alt={'logo'}
                           onClick={()=>window.location.replace('/')}>
                    </Image>
                </div>

                {// generation processing of navigation bar
                    linkData.map((link) => (
                        <Link key={link.path}
                              className={`${pathname === link.path ? 'text-red-500' : ''} text-[12px]  mt-9 ml-15 pl-3`}
                              href={link.path}>{link.name}</Link>))
                }

                {/*button*/}
                <div className='ml-20 mt-6.5'>
                    <Button><Link href={'../assessment'}>立即评估</Link></Button>
                </div>

                {/* icon */}
                <div className={`$ ml-15 mt-8 `}>
                    <SearchOutlined className='mr-15' style={{fontSize: '16px'}}></SearchOutlined>
                    <TranslationOutlined style={{fontSize: '16px'}}></TranslationOutlined>
                </div>
            </div>
        </div>
    )
}