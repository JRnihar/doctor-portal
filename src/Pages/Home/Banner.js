import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    const myStyle = {
        backgroundImage:
            "url('https://i.ibb.co/vwZvz8c/bg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
            <div class="hero min-h-screen px-12">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair}class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Start Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button class="btn btn-primary text-white font-bold">Get Started</button> */}
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Banner;