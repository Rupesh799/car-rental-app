"use client";
import React, { useState } from "react";
import CarItems from "./CarItems";
import BookingFormModal from "../CarBooking/BookingFormModal";

const CarLists = (props: any) => {
  const [seletedCar, setSelectedCar] = useState<any>();
  return (
    <div className="w-full mt-5 grid grid-cols-1 justify-between gap-4 items-center md:grid-cols-2  lg:grid-cols-3 ">
      {props.carlist.map((car: any, index: number) => (
        <div
          key={index}
          onClick={() => {
            (document.getElementById as any)("my_modal_4").showModal();
            setSelectedCar(car);
          }}
          className="cursor-pointer"
        >
          <CarItems car={car} />
        </div>
      ))}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <BookingFormModal car={seletedCar}/>
      </dialog>
    </div>
  );
};

export default CarLists;
