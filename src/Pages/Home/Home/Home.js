import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Footer from '../Footer/Footer';
import Services from '../Services/Services'

const Home = () => {
 return (
  <div id="home">
   <Banner></Banner>
   <Services></Services>
   <Experts></Experts>
   <AboutUs></AboutUs>
   <Footer></Footer>
  </div>
 );
};

export default Home;