'use client'

import React from 'react';
import {Avatar, List} from 'antd';
import {data} from '../../mock/data'
import Link from "next/link";


function News() {
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta className='!items-center'
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                            title={<Link href={`/news/${item.id}`}>{item.title}</Link>}
                            description={item.body}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default News;