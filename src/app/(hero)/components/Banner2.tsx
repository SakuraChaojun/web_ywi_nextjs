'use client'
import bannerPic from '@/app/(hero)/assets/sl-aslog.jpg'
import Image from "next/image";
import logo from "@/app/(hero)/assets/logo.png";
import React, {useEffect} from "react";
import axios from 'axios'


export default function Banner2() {

    useEffect(() => {

        // const query ={
        //     keyword:keyword,
        //     urlLink:url
        // }

    }, []);
    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                    <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                    >
                        <polygon points="0,0 90,0 50,100 0,100"/>
                    </svg>

                    <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                            <div className="hidden sm:mb-10 sm:flex">
                                <div
                                    className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    加拿大
                                    {/*<a href="/assessment" className="font-semibold whitespace-nowrap text-[#e81e1a]">*/}
                                    {/*    <span aria-hidden="true" className="absolute inset-0"/>*/}
                                    {/*    立即开始免费评估 <span aria-hidden="true">&rarr;</span>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                            <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                                移民打分工具
                            </h1>

                            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                千里之行始于足下
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="/assessment"
                                    className="rounded-md bg-[#e8161a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    立即开始免费评估
                                </a>
                                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                    了解更多 <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                    className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                />


                {/*<Image className='aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'*/}
                {/*        src={bannerPic} alt={'banner'}*/}
                {/*       onClick={() => window.location.replace('/')}>*/}
                {/*</Image>*/}
            </div>
        </div>

    )
}
