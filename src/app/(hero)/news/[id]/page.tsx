import React from 'react'
import { Card, Space } from 'antd';
import {data} from '../../../mock/data'


interface IParams {params:{id:string}}

export async function generateMetadata({params}:IParams){
    return{
        title:`资讯详情 - ${params.id}`
    }
}


export default function Details({params}:IParams) {
    const item = data.find(item => item.id === +params.id)
    return (
        <Card title={item?.title}>
            <p>{item?.body}</p>


        </Card>
    )
}
