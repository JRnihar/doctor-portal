import React from 'react';
import appointment from "../../assets/images/appointment.png"

const ContactUs = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{
                background: `url(${appointment})`
            }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h3 class="mb-5 text-xl text-primary">Contact Us</h3>
                        <h3 class="mb-5 text-5xl text-white   font-bold">Stay Contact with Us</h3>
                        <div className='grid grid-cols-1 justify-items-center gap-5'>
                            <input
                                type='text'
                                placeholder='Email Address'
                                className='input w-full max-w-md'
                            />
                            <input
                                type='text'
                                placeholder='Subject'
                                className='input w-full max-w-md'
                            />
                            <textarea
                                className='textarea w-full max-w-md'
                                placeholder='Your message'
                                rows={6}
                            ></textarea>
                            {/* <PrimaryButton>Submit</PrimaryButton> */}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUs;