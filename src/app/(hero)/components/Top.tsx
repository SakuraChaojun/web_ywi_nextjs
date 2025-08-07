'use client'
import {useRef} from "react";
import {WechatOutlined, WhatsAppOutlined} from "@ant-design/icons";

export default function Top() {
    // for social media button using
    const ref: any = useRef(null);

    return (
        <section className='w-full bg-[#EB1E1A] text-white sm:py-1  text-sm duration-300'>

            <div className='mx-auto flex duration-300 md:grid md:w-10/12 md:grid-cols-5'>

                <p className='hidden duration-300 md:block md:w-fit  '>9030 Leslie St Unit 4, Richmond Hill
                </p>

                <p className='ml-5 duration-300 md:col-span-3 md:text-right'>
                    info@ywialliance.com | 客服电话：(647) 495-6888
                </p>

                <p className='ml-40 flex gap-x-12 duration-300 md:text-right'>
                    <WechatOutlined className='cursor-pointer duration-300' onClick={() => ref.current.showModal()}
                                    style={{fontSize: '16px', color: 'white'}}></WechatOutlined>
                    <WhatsAppOutlined className='cursor-pointer duration-300' onClick={() => ref.current.showModal()}
                                      style={{fontSize: '16px', color: 'white'}}></WhatsAppOutlined>
                </p>

                <dialog className='open:backdrop:bg-slate-300/50 mx-auto my-auto' ref={ref}>
                    <h1>立即扫码微信</h1>
                    <button className='w-fit bg-[#EB1E1A] px-9 py-3 text-white' onClick={() => ref.current.close()}>关闭
                    </button>
                </dialog>
            </div>
        </section>

    )
}
