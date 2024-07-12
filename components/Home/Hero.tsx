import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className='p-5 space-y-6'>
                <h1 className='font-bold text-4xl '>Rent Car in your area</h1>
                <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qu</p>
                <button className='py-2 px-3 bg-blue-900 rounded-md text-white font-bold hover:scale-105 transition-all'>Explore</button>
        </div>
        <div>
            <Image src={"/hero.png"} alt='hero' width={600} height={400} className='object-cover hidden md:block'/>
        </div>
    </div>
  )
}

export default Hero