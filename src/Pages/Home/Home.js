import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import InfoCard from './InfoCard';
import Services from './Services';
import Tastimonials from './Tastimonials';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <InfoCard></InfoCard>
          <Services></Services>
          <Tastimonials></Tastimonials>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;