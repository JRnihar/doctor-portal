import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AppoinmentCard from './AppoinmentCard';

const Appoinment = () => {
    const[date,setDate]=useState(new Date())
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AppoinmentCard date={date} ></AppoinmentCard>
        </div>
    );
};

export default Appoinment;
