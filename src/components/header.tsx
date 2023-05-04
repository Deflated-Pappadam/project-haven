import React from 'react'

function Header() {
  return (
    <div  className='text-black flex justify-between rounded-lg w-11/12 mx-auto p-5 mt-12 border-2 border-black'>
        <div className='font-medium text-2xl'>
            logo
        </div>
        <div className='flex gap-10 ml-12 text-xl font-medium my-auto'>
            <div>home</div>
            <div>about us</div>
            <div>walkthrough</div>
            <div>colllections</div>
        </div>
        <div>
            <button className='text-white font-medium border-black border-2 px-10 py-5 rounded-3xl text-lg bg-black'>Contribute</button>
        </div>
    </div>
  )
}

export default Header