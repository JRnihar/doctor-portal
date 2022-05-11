import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppoinmentBanner = ({date,setDate}) => {
    // const[date,setDate]=useState(new Date())
  return (
    <div>
      <div class="hero my-12">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            {/* <h1 className="my-8">Box Office News!</h1> */}
            <DayPicker
            className="mr-24"
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
