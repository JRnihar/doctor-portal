import React from "react";

const AppoinmentInfo = ({ service ,SetTretment}) => {
  const {  name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary">{name}</h2>
        <p>
            {
                slots.length>0
                ?
                <span>{slots[0]}</span>
                :
                <span className="text-red-500">Try Another day</span>
            }
        </p>

        <p>{slots.length} Available {slots.length>1?"spaces": 'space'} </p>
        <div class="card-actions">
          {/* <button  class="btn btn-primary"> Book Appoinment  Now</button> */}
          <label onClick={()=>SetTretment(service)} disabled={slots.length===0} for="booking-modal" class="btn btn-primary modal-button">Book Appoinment  Now</label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentInfo;
