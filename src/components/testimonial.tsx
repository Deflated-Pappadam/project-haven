import React from 'react'
import Image from 'next/image'
import img1 from "../assets/images/64.png";

type tprops = {
  text: String
  name: String
}

export default function testimonial({ text, name }: tprops) {
  return (
    <div className='flex w-11/12 mx-auto my-10'>
      <div className='p-10 bg-white rounded-lg drop-shadow-lg'>
      <div>
            <Image src={img1} alt='' className='mx-auto my-4 rounded-full w-[30%]'/>
        </div>
        <div>
            <p className='text-black text-lg'>"<span className='italic'>{text}</span>"</p>
            <p className='text-black font-bold text-2xl m-5 text-right'>{name}</p>
        </div>
      </div>
      <div className='w-[50%]'></div>
    </div>
  )
}
