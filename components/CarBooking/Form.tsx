import { createBooking, getStoreLocations } from "@/services";
import React, { useEffect, useState } from "react";

const Form = ({car}:any) => {
  const [location, setLocation] = useState<any>([])
  const [formValue, setFormValue] = useState({
    location:'',
    pickupDate:'',
    pickupTime:'',
    dropOffDate:'',
    dropOffTime:'',
    contact:'',
    userName:"",
    carId: "",
  })
  useEffect(() => {
    getStoreLocation()
        
  }, []);
//when the car is available
  useEffect(()=>{
    if(car){
      setFormValue({
        ...formValue,
        carId: car.id
      })
    }
  },[car])
  const getStoreLocation = async()=>{
    const res:any = await getStoreLocations();
    console.log(res);
    setLocation(res?.storesLocations)
  }

  const handleChange=(e:any)=>{
      setFormValue({
        ...formValue,
        [e.target.name]:e.target.value
      })
  }

  const handleSubmit=async()=>{
    console.log(formValue);
    const res = await createBooking(formValue)
    console.log(res);
    
    
  }
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="w-full">
        <select className="select select-info w-full max-w-xl" name="location"
        onChange={handleChange}
        >
          <option disabled selected>
            Select location
          </option>
          {location && location.map((loc:any, index:number)=>(
            <option key={index}>{loc.address}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-full">
          <label htmlFor="">Pickup Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
            name="pickupDate"
        onChange={handleChange}

          />
        </div>
        <div className="w-full">
          <label htmlFor="">Dropoff Date</label>

          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
            name="dropOffDate"
        onChange={handleChange}

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
            name="pickupTime"
          onChange={handleChange}

          />
        </div>
        <div className="w-full">
          <label htmlFor="">Dropoff Time</label>

          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
            name="dropOffTime"
        onChange={handleChange}

          />
        </div>
      </div>
      <div className="w-full">
      <input
            type="text"
            placeholder="Contact number"
            className="input input-bordered input-info w-full max-w-xl"
            name="contact"
            onChange={handleChange}

          />
      </div>
      
      <div className="modal-action">
        <form method="dialog" className="flex gap-3">
      <button className="btn">Close</button>
      <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
        </form>
     
      </div>
    </div>
  );
};

export default Form;
