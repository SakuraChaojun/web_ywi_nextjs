import React from 'react'
import { Card, Space } from 'antd';
import {data} from '../../../mock/data'


export default function Details({params}:{params:{id:string}}) {
    const item = data.find(item => item.id === +params.id)
    return (
        <Card title={item?.title}>
            <p>{item?.body}</p>


        </Card>
    )
}