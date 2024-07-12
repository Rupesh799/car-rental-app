import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="w-full">
        <select className="select select-info w-full max-w-xl">
          <option disabled selected>
            Select language
          </option>
          <option>English</option>
          <option>Japanese</option>
          <option>Italian</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-full">
          <label htmlFor="">Pickup Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Dropoff Date</label>

          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-full">
          <label htmlFor="">Pickup Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Dropoff Time</label>

          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
      </div>
      <div className="w-full">
      <input
            type="text"
            placeholder="Contact number"
            className="input input-bordered input-info w-full max-w-xl"
          />
      </div>
    </div>
  );
};

export default Form;
