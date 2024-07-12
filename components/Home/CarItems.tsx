import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { PiSpeedometerFill } from "react-icons/pi";

const CarItems = (props: any) => {
  const [car, setCar] = useState<any>();

  useEffect(() => {
    if(props.car){

      setCar(props.car);
    }
  }, [props.car]);


  return car &&(
     
      <div className="group w-full bg-gray-200 rounded-md shadow-xl p-2 flex flex-col items-center gap-2 hover:border-2 hover:bg-inherit">
        <h2 className="font-bold ">{car.name}</h2>
        <h2>
          <span className="font-bold">Rs.</span>
          <span>{car.price}/Day</span>
        </h2>
              <Image
                src={car.image?.url}
                width={200}
                height={200}
                alt={car?.name}
                className="object-contain"
              />

              <div className="flex items-center gap-6 group-hover:hidden">
                <div className="flex flex-col items-center ">
                  <FaCar color="gray" />
                  <h2 className="text-gray-500">{car.carType}</h2>
                </div>
                <div className="flex flex-col items-center">
                  <PiSpeedometerFill color="gray" />
                  <h2 className="text-gray-500">{car.speed} MPH</h2>
                </div>
              </div>
              <button className="hidden group-hover:block bg-blue-900 text-white py-2 px-3 rounded-md w-full hover:transition-all">
                Rent Car
              </button>
            </div>
    
  );
};

export default CarItems;
