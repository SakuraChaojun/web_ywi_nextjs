import "../../globals.css"
import React from 'react';


export default function NewsLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <div className='max-w-xl mx-auto mt-10 '>
                {children}</div>

        </>
    );
}
