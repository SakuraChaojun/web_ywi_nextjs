import React from 'react';
import CommentsList from "@/app/(hero)/components/commentsList";
import type {Metadata} from "next";

export const metadata:Metadata = {
    title:'资讯列表'
}


function News() {

    return <CommentsList></CommentsList>


}

export default News;