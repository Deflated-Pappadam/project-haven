import React from 'react'
import Image from 'next/image'
import img1 from "../assets/images/64.png";


export default function testimonial() {
  return (
    <div className='flex w-11/12 mx-auto my-10'>
      <div className='p-10 bg-white rounded-lg drop-shadow-lg'>
      <div>
            <Image src={img1} alt='' className='mx-auto my-4 rounded-full w-[30%]'/>
        </div>
        <div>
            <p className='text-black text-lg'>"<span className='italic'>lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur eum nemo. Quaerat fugiat aperiam dolor? Aperiam distinctio numquam provident, culpa quod itaque totam quam consectetur molestias suscipit iusto error.</span>"</p>
            <p className='text-black font-bold text-2xl m-5 text-right'>Name</p>
        </div>
      </div>
      <div className='w-[50%]'></div>
    </div>
  )
}
