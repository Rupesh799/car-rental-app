import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 px-7 items-center shadow-sm border'>
        <Image src={"/logo.png"} alt='logo' width={50} height={70}/>

        <div className='hidden md:flex gap-5 cursor-pointer font-bold'>
            <h2>Home</h2>
            <h2>History</h2>
            <h2>Contact</h2>
        </div>
        <UserButton/>
    </div>
    
  )
}

export default Navbar