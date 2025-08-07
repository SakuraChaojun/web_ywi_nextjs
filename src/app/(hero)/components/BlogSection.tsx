
'use client'
import axios from 'axios'

import {useEffect} from "react";

export default function BlogSection() {

    useEffect(() => {

    }, []);
    const posts = [
        {
            id: 1,
            title: '移民政策重大调整',
            href: '#',
            description:
                '加拿大一直是最受欢迎的移民目的地之一，但自2023年移民部长马克·米勒提出移民政策改革以来, 2024年初开始实施了一系列政策变更收紧措施。\n' +
                '\n' +
                '2024 年加拿大移民政策从联邦到省政府、从学签到工签等都有调整变化，海外移民专家为大家整理总结以下一些较为重大的调整内容\n' +
                '\n.',
            imageUrl:
            'https://easyca.ca/wp-content/uploads/2024/03/65fc80bc6f69e.png',

            date: 'Mar 16, 2025',
            datetime: '2025-03-16',
            category: {title: '移民资讯', href: '#'},
            author: {
                name: '亿微移民',
                role: '持牌顾问',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },

        {
            id: 2,
            title: '最新入境政策详解',
            href: '#',
            description:
                '朋友们都收到入学时间了吗？开学季快要到了哦。如果你即将前往加拿大，以下是最新的入境政策和注意事项，帮助你顺利抵达\n' +
                '\n' +
                '加拿大政府5月10日更新的入境政策明确指出了所有通过空运、陆运或海运方式进入加拿大的旅客：',
            imageUrl:
                'https://www.amna.gr/photos/202107/w22-84230airport1.jpeg',
            date: 'Mar 16, 2025',
            datetime: '2025-03-16',
            category: {title: '入境指南', href: '#'},
            author: {
                name: '张顾问',
                role: '资深持牌顾问',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            id: 3,
            title: '旅游转学签须知',
            href: '#',
            description:
                '加拿大移民部于2024年6月26日宣布了一项新政策：从即日起，所有在加拿大境内持有旅游签证并已完成前置课程且希望转为学生签证\n' +
                '\n' +
                '的申请人，必须获得省政府的证明信（PAL）。从6月26日起，所有申请学签的旅转学申请人都需要提供省政府的证明信。这意味着，先\n' +
                '\n' +
                '入境再申请加拿大学签的优势将大大减少。',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
            date: 'Mar 16, 2025',
            datetime: '2025-03-16',
            category: {title: '移民资讯', href: '#'},
            author: {
                name: '刘顾问',
                role: '资深签证专家',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },


    ]


    return (
        <div className="bg-[#F8F9FA] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        移民资讯
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">时刻了解加拿大最新移民政策</p>
                </div>

                <div
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    alt=""
                                    src={post.imageUrl}
                                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"/>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0"/>
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                                </div>

                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt="" src={post.author.imageUrl}
                                         className="size-10 rounded-full bg-gray-100"/>
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0"/>
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}