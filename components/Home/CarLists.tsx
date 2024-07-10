import React from 'react'
import CarItems from './CarItems'

const CarLists = (props:any) => {
  return (
    <div className='w-full mt-5 grid grid-cols-1 justify-between gap-4 items-center md:grid-cols-2  lg:grid-cols-3 '>
        {props.carlist.map((car:any, index:number)=>(
                
                 <CarItems car={car}/>
             
        ))}
    </div>
  )
}

export default CarLists