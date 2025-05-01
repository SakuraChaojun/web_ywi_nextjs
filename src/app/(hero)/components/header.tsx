'use client'
import React from 'react'
import Link from "next/link";
import {Button} from'antd'
import logo from '../assets/logo.png'
import {WechatOutlined,WhatsAppOutlined,SearchOutlined,TranslationOutlined} from "@ant-design/icons";
import {usePathname} from "next/navigation";
import Image from "next/image";
export default function Header() {

 const linkData:{name:string,path:string}[] = [
        {name:'首页',path:'/'},
        {name:'打分',path:'/assessment'},
        {name:'资讯',path:'/news'},
        {name:'视频',path:'/video'},
        {name:'项目',path:'/project'},
        {name:'费用',path:'/expense'},
        {name:'关于',path:'/about'}
    ];

    const pathname = usePathname()

    return(
        <div>
            {/*Top header*/}
            <div className={`topHeader TODO:social media icon need link`}>
            <div className='bg-[#EB1E1A] flex gap-50 container mx-auto h-[30px] w-[1333px] '>
                <div className='text-white text-[12px] mt-1.5 ml-30'> 9030 Leslie St Unit 4, Richmond Hill, ON L4B 1G2</div>
                <div className='text-white text-[12px] mt-1.5'> info@ywialliance.com | 客服电话：(647) 495-6888</div>
                <div className='mt-1  space-x-6'>
                    <WhatsAppOutlined style={{fontSize: '16px', color: 'white'}}></WhatsAppOutlined>
                    <WechatOutlined style={{fontSize: '16px', color: 'white'}}></WechatOutlined>
                </div>
            </div>
        </div>


    {/*nav bar*/}
    <div className='navBar h-[90px]  bg-[#F7F9FE] container mx-auto flex w-[1333px]'>
        <div className='ml-28 mt-4'>
            <Image src={logo} alt={'logo'}></Image>
        </div>

        {// generation processing of navigation bar
            linkData.map((link) => (
                <Link key={link.path}
                      className={`${pathname === link.path ? 'text-red-500' : ''} text-[12px]  mt-9 ml-15 pl-3`}
                      href={link.path}>{link.name}</Link>))
        }

        {/*{button}*/}
        <div className='ml-20 mt-6.5'>
            <Button><Link href={'../assessment'}>立即评估</Link></Button>
        </div>

        {/* icon */}
        <div className={`$ ml-15 mt-8 pl-5`}>
            <SearchOutlined className='mr-15' style={{fontSize: '16px'}}></SearchOutlined>
            <TranslationOutlined style={{fontSize: '16px'}}></TranslationOutlined>
        </div>

    </div>
</div>
)
}
