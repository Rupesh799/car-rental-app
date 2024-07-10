import React from "react";

const CarFilter = () => {
  return (
    <div className="md:flex-row flex justify-between mt-10 items-center xs:flex-col">
      <div className="">
        <h2 className="font-bold text-3xl ">Car's Catalog</h2>
        <p className="text-sm text-gray-400">Search the car you need</p>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Select Price
          </option>
          <option>Rs. 2000</option>
          <option>Rs. 3000</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Company
          </option>
          <option>Toyota</option>
          <option>Suzuki</option>
        </select>
      </div>
    </div>
  );
};

export default CarFilter;
