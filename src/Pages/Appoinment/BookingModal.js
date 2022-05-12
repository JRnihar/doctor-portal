import React from "react";
import { format} from "date-fns";

const BookingModal = ({ date, tretment, SetTretment}) => {
  const{ _id,name,slots}=tretment
   

const handleSubmit=(e)=>{
  e.preventDefault()
  const slot=e.target.slot.value
  console.log(slot);
  SetTretment(null)
}

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-secondary">
            Booking name : {name}
          </h3>
          <p class="py-4">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 justify-items-center mt-3">
            
              <input type="text" disabled value={ format(date, "PP") } class="input input-bordered w-full max-w-xs" />
              <select name="slot" class="select select-bordered w-full max-w-xs">
               {
                 slots.map(slot=><option value={slot}>{slot}</option>)
               }
           
              </select>
              <input type="text" name="name" placeholder="Type your name" class="input input-bordered w-full max-w-xs" />
              <input type="email" name="email" placeholder="Type your email" class="input input-bordered w-full max-w-xs" />
              <input type="number" name="phone" placeholder="Type your phone" class="input input-bordered w-full max-w-xs" />
              <input type="submit" placeholder="Submit" class="btn btn-secondary w-full max-w-xs" />
            </form>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
