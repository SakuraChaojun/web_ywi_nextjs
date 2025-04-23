import Image from "next/image";
import banner from '@/app/(hero)/assets/sl-aslog.jpg'
import {Button} from'antd'
import {Metadata} from "next";



export const metadata:Metadata = {
    title:'亿微移民'
}

export default function Home() {
  return (
      <div className='banner  items-center-safe'>
        <div className='absolute right-1/6'>
          <Image src={banner} alt={'banner'} ></Image>
            <div className=' absolute top-45 right-20'>
            <h1 className='text-5xl font-semibold'>加拿大移民打分工具</h1>
                <h3 className='text-2xl font-light mt-10 ml-57'>千里之行  始于足下</h3>
                    <Button type="primary" danger className='mt-10 ml-70'>立即开始免费评估</Button>
        </div>
        </div>

          <div>

          </div>



      </div>
  );
}
