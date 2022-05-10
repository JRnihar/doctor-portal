import React from 'react';
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"

const MakeAppoinmant = () => {
    return (
        <div>
            <section style={{
                background: `url(${appointment})`
            }}  className='flex flex justify-center items-center mt-12'>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-110px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 text-white p-6'>
                    <h2 className=' text-xl text-primary'>Appointment</h2>
                    <h3 className='text-bold text-3xl text-white'>Make an Appointment Today</h3>
                    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, ratione nostrum quia voluptatem suscipit laborum ut culpa itaque iusto accusantium nemo, aut nesciunt neque. Repellat, nisi itaque sint exercitationem autem ducimus! Quibusdam, officia! Corrupti nostrum totam quibusdam doloremque inventore?</p>
                </div>
            </section>
        </div>
    );
};

export default MakeAppoinmant;