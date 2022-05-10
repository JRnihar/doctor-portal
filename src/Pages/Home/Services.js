import React from 'react';
import cavitiy from "../../assets/images/cavity.png"
import fluoride from "../../assets/images/fluoride.png"
import whitening from "../../assets/images/whitening.png"
import treatment from "../../assets/images/treatment.png"
import MakeAppoinmant from './MakeAppoinmant';


const Services = () => {
    return (
        <div className='my-28 mt-6'>
            <div className='text-center text-xl'>
                <h3 className='text-primary'>Our Services</h3>
                <h2>Services we Provide </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-5'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={cavitiy} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">cavity</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">fluoride</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={whitening} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>

            <div>
                <div class="hero min-h-screen px-12 mt-12 ">
                    <div class="hero-content flex-col lg:flex-row ">
                        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                        <div className='px-10'>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on  Your Terms</h1>
                            <p class="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>


            <MakeAppoinmant></MakeAppoinmant>
        </div>
    );
};

export default Services;