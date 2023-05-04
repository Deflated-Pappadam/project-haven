import React from 'react'
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg"
import github from "../assets/github.svg"
import Image from "next/image";

function Footer() {
  return (
    <div className='p-10  text-black flex justify-between w-11/12 bg-white mx-auto text-2xl border-2 border-black rounded-xl'>
      <div className=''>
        logo
      </div>
      <div className='text-black text-md flex space-x-6 justify-between items-center'>
      ©deflated pappadam
      </div>
      <div className='flex gap-5'>
        <button className='m-auto border-black border-2 rounded-full'><Image src={twitter} alt="" className="w-10 p-2 " /></button>
        <button className='m-auto border-black border-2 rounded-full'><Image src={discord} alt="" className="w-10 p-2 " /></button>
        <button className='m-auto border-black border-2 rounded-full'><Image src={github} alt="" className="w-10 p-2 " /></button>
      </div>
    </div>
  )
}

export default Footer