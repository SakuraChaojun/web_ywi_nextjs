import "../../globals.css"
import React from 'react';


export default function NewsLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <div className='mx-auto mt-10 max-w-xl'>
                {children}</div>

        </>
    );
}
