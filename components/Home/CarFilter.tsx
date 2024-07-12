"use client"
import React, { useEffect, useState } from "react";

const CarFilter = ({carLists,setBrand,ordering}:any) => {

  const [brandList, setBrandList] = useState<any>()

  const BrandSet = new Set()
  useEffect(()=>{
    if(carLists){
      filterCarList()
    }
  },[carLists])
  //filter out distinct value
  const filterCarList=()=>{
    carLists.forEach((el:any)=>{
        BrandSet.add(el.carBrand);
    })
    setBrandList(Array.from(BrandSet))
  }

  

  const handleChange = (e: any) => {
    e.preventDefault()
    setBrand(e.target.value)
  }
  return (
    

    <div className="md:flex-row flex justify-between mt-10 items-center xs:flex-col">
      <div className="">
        <h2 className="font-bold text-3xl ">Car's Catalog</h2>
        <p className="text-sm text-gray-400">Search the car you need</p>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs" 
        onChange={(e)=>ordering(e.target.value)}
        >
          <option disabled selected>
            Select Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs"
        onChange={()=>handleChange}
        >
          <option disabled selected>
            Company
          </option>
         {brandList && brandList.map((brand:string,index:number)=>(
           <option key={index} className="capitalize">{brand}</option>
          ))}
        </select>
      </div>
    </div>
          
  );
};

export default CarFilter;
