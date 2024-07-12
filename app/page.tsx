'use client'
import CarFilter from "@/components/Home/CarFilter";
import CarLists from "@/components/Home/CarLists";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import { getCarList } from "@/services";

import { useEffect, useState } from "react";

export default function Home() {

  //here we have to make a state to store the data
  const [carlist, setCarList] = useState<any>([])
  //for car original list
  const [allCars, setAllCars] = useState<any>([])

  useEffect(()=>{
      getCarList_()
  })
  const getCarList_ = async()=>{
    const res:any = await getCarList();
    // console.log(res);
    setCarList(res?.carLists)
    setAllCars(res?.carLists)
    
  }

  const filterCarList=(brand:any)=>{
      const filterList = allCars.filter((item:any)=>
      item.carBrand == brand
      );

      setCarList(filterList)
  }


  const filterPriceOrder=(order:any)=>{
      const sortedData = [...allCars].sort((a,b)=>
      order==-1? a.price - b.price : b.price-a.price
      );
      setCarList(sortedData)
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero/>
      <Search/>
      <CarFilter carLists={allCars}
      setBrand={(value:any)=>filterCarList(value)
      }
      ordering={(value:string)=>filterPriceOrder(value)}
      />
      
      <CarLists carlist={carlist}/>
    </div>
  );
}
