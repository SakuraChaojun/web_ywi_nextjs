import React from 'react'
import Top from "@/app/(hero)/components/Top";
import Nav from "@/app/(hero)/components/Nav.";
import NavNew from "@/app/(hero)/components/NavNew";
import TopNew from "@/app/(hero)/components/TopNew";
import TopRed from "@/app/(hero)/components/TopRed";
export default function Header() {

    return (
        <div>
            {/*<Top/>*/}
            {/*<TopNew></TopNew>*/}
            <TopRed></TopRed>
            {/*<Nav/>*/}
            <NavNew/>


        </div>
    )
}
