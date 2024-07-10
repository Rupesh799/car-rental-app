'use client'
import CarFilter from "@/components/Home/CarFilter";
import CarLists from "@/components/Home/CarLists";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import { getCarList } from "@/services";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  //here we have to make a state to store the data
  const [carlist, setCarList] = useState<any>([])

  useEffect(()=>{
      getCarList_()
  })
  const getCarList_ = async()=>{
    const res:any = await getCarList();
    // console.log(res);
    setCarList(res?.carLists)
    
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero/>
      <Search/>
      <CarFilter/>
      
      <CarLists carlist={carlist}/>
    </div>
  );
}
