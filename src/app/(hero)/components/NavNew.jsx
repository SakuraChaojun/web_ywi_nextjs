//TODO :
// 1. refine the usepathname
// 2. considering more buttons ?
// 3. duration function

'use client'

import React, {useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {usePathname} from "next/navigation";
import logo from "../assets/logo.png";
import Image from "next/image";


const navigation = [
    {name: '首页 | HOME', href: '/'},
    {name: '打分 | ASSESS', href: '/assessment'},
    {name: '资讯 | NEWS', href: '/news'},
    {name: '关于 | ABOUT', href: '/about'},]


export default function NavNew() {

    const pathName = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    console.log(pathName);
    return (
        <header className="bg-[#F7F9FF]">

        <nav aria-label="Global"
             className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">

            {/*logo part*/}
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">亿微移民</span>
                    <Image className='h-10 w-auto cursor-pointer' src={logo} alt={'logo'}
                           onClick={() => window.location.replace('/')}>
                    </Image>
                </a>
            </div>

            {/*main nav*/}
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-semibold text-gray-900 text-sm/6">
                        {item.name}
                    </a>))}
            </div>


            <div className="flex flex-1 items-center justify-end gap-x-6">
                <a href="/assessment"
                   className="rounded-md bg-[#e81e1a] px-3 py-2 text-sm font-semibold text-white shadow-xs
                        hover:bg-indigo-500 focus-visible:outline-2
                        focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                        duration-300">
                    开始评估
                </a>
            </div>

            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="inline-flex items-center justify-center rounded-md text-gray-700 -m-2.5 p-2.5"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6"/>
                </button>
            </div>
        </nav>

        {/*mobile design*/}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="duration-500 lg:hidden">
            <div className="fixed inset-0 z-10"/>

            <DialogPanel
                className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto
                    bg-[#F7F9FF] px-6 py-6
                    sm:max-w-sm sm:ring-1
                    sm:ring-gray-900/10 ">

                <div className="flex items-center gap-x-6">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">亿微移民</span>

                        <Image className='h-10 w-auto' src={logo} alt={'logo'}
                               onClick={() => window.location.replace('/')}>
                        </Image>
                    </a>
                    <a
                        href="/assessment"
                        className="ml-auto rounded-md bg-[#e81e1a] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        开始评估
                    </a>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-md text-gray-700 duration-500 -m-2.5 p-2.5"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="py-6 space-y-2">
                            {navigation.map((item) => (<a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 text-base/7 hover:bg-gray-50"
                            >
                                {item.name}
                            </a>))}
                        </div>
                        <div className="py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 font-semibold text-gray-900 py-2.5 text-base/7 hover:bg-gray-50"
                            >
                                打分计算器
                            </a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>

    </header>

    )
}
