import React from 'react'
import Image, { StaticImageData } from "next/image";


type nftProps = {
  name: string;
  rarity: string;
  img: StaticImageData
}


export default function NftBox(props: nftProps) {
  return (
    <div>
      <div className='md:min-w-[10rem] max-w-[15rem] flex flex-col border-2  border-black m-10 rounded-md'>
        <div className="img w-[100%] h-[80%] bg-black overflow-hidden rounded-md">
        <Image src={props.img} width={300} height={300} alt="" className="h-[100%] w-[100%] hover:scale-150 ease-in-out duration-1000 hover:translate-y-4 transition-all" />
        </div>
        <div className='bg-white flex justify-between items-center rounded-b-md p-2'>
          <div className="flex justify-center flex-col mt-1 gap-1 ">
            <div className="bg-[#8adb37] w-[50%] flex items-center justify-center rounded-full">
              <h1 className=' text-white text-sm font-bold'> {props.rarity}</h1>
            </div>
            <h1 className='text-black text-xl font-bold'>{props.name}</h1>
          </div>
          
        </div>
      </div>
    </div>
  )
}
