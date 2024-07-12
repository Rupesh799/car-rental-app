import React from 'react'
import CarLists from '../Home/CarLists'
import CarItems from '../Home/CarItems'
import Form from './Form'

const BookingFormModal = ({car}:any) => {
  return (
    
        <div className="modal-box w-11/12 max-w-5xl">

            <div>
                <h3 className="text-lg font-bold text-center">Booking Form</h3>
            </div>
            <hr />
            <div className='grid grid-cols-1 mt-5 gap-8 md:grid-cols-2'>
                <div>
                        <CarItems car={car}/>
                </div>
                <div className='w-full'>
                        <Form/>
                </div>
            </div>


    <div className="modal-action ">
      <form method="dialog" className='flex gap-3'>
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
    
  )
}

export default BookingFormModal