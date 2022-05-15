import React from "react";
import { format} from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, tretment, SetTretment}) => {
  const [user]=useAuthState(auth)
  const{ _id,name,slots}=tretment
  const formattedDate = format(date, 'PP');
   

const handleSubmit=(e)=>{
  e.preventDefault()
  const slot=e.target.slot.value
  console.log(slot);
  SetTretment(null)


  const booking = {
    treatmentId: _id,
    treatment: name,
    date: formattedDate,
    slot,
    patient: user.email,
    patientName: user.displayName,
    phone: e.target.phone.value

  }
  fetch('http://localhost:5000/booking', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
  })
    .then(res => res.json())
    .then(data => {
    
      if (data.success) {
        alert(`Appointment is set, ${formattedDate} at ${slot}`)
      }
      else {
        alert(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
      }
    });
  ;
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
              <input type="text" name="name" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
              <input type="email" name="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
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
