import React from 'react';
import testimonial from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Tastimonials = () => {
    return (
        <div className='px-14'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary text-xl'>Testimonial</h2>
                    <h3 className='text-3xl text-bold '>Whats our patients says</h3>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={testimonial} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
                <div class="card lg:-max-w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos quas possimus consectetur rem dolor modi autem optio voluptatum velit?</h2>
                      
                        <div >
                            <div className='flex items-center'>
                                <div>
                                    <div class="avatar">
                                        <div class=" w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                            <img src= {people1} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>Wilson hery</h2>        
                                    <h2>Califorinia</h2>        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card lg:-max-w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos quas possimus consectetur rem dolor modi autem optio voluptatum velit?</h2>
                      
                        <div >
                            <div className='flex items-center'>
                                <div>
                                    <div class="avatar">
                                        <div class=" w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                            <img src= {people2} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>Wilson hery</h2>        
                                    <h2>Califorinia</h2>        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card lg:-max-w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos quas possimus consectetur rem dolor modi autem optio voluptatum velit?</h2>
                      
                        <div >
                            <div className='flex items-center'>
                                <div>
                                    <div class="avatar">
                                        <div class=" w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                            <img src= {people3} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>Wilson hery</h2>        
                                    <h2>Califorinia</h2>        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Tastimonials;