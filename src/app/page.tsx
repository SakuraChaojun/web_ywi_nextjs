import Image from "next/image";
import banner from'../app/assets/sl-aslog.jpg'

export default function Home() {
  return (
      <div >
        <Image src={banner} alt={'banner'}></Image>
          <div>
          </div>
          <h1> 加拿大移民</h1>
      </div>
  );
}
