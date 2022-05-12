import { format, setDate } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentInfo from "./AppoinmentInfo";
import BookingModal from "./BookingModal";

const AppoinmentCard = ({ date }) => {
  const [services, setServices] = useState([]);
  const[tretment,SetTretment]=useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(date);
  return (
    <div>
      <div>
        <h3 className="text-xl text-secondary text-center my-12">
          Available Appointments on {format(date, "PP")}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
          {
              services.map(service=><AppoinmentInfo key={service._id} SetTretment={SetTretment} service={service}></AppoinmentInfo>)
          }
      </div>
      {tretment && <BookingModal
                date={date}
                tretment={tretment}
                SetTretment={SetTretment}
            ></BookingModal>}
    </div>
  );
};

export default AppoinmentCard;
