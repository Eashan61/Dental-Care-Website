import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

// Creating Fake DATA

// const services = [
// {id: 1,
// name: 'Crowns and bridges',
// price: '15000',
// time: '7 Seatings',
// img: 'https://i.ibb.co/YBPD0Xt/crowns-and-bridges.png'},

// {id: 2,
// name: 'Dentures (false teeth)',
// price: '8000', 
// time: '2 Seatings', 
// img: 'https://i.ibb.co/YQqdXTK/Dentures-false-teeth.jpg'},

// {id: 3,
// name: 'Orthodontics',
// price: '10000', 
// time: '4 Seatings', 
// img: 'https://i.ibb.co/qF5D2CK/Orthodontics.jpg'},

// {id: 4,
// name: 'Root canal treatment (endodontics)',
// price: '7000', 
// time: '4 Seatings', 
// img: 'https://i.ibb.co/vqr0MSC/Root-canal-treatment-endodontics.jpg'},

// {id: 5,
// name: 'Scale and polish',
// price: '2000', 
// time: '4 Seatings', 
// img: 'https://i.ibb.co/WvYtt8V/Scale-and-polish.jpg'},

// {id: 6,
// name: 'Wisdom teeth removal',
// price: '2000', 
// time: '4 Seatings', 
// img: 'https://i.ibb.co/fk5Cq4r/Wisdom-teeth.jpg'},

// {id:7,
// name: 'White fillings',
// price: '2000', 
// time: '4 Seatings', 
// img: 'https://i.ibb.co/bBWGxFz/White-fillings.jpg'}
// ]

const Services = () => {
 const [services,setServices] = useState([])
 useEffect( () => {
  fetch('services.json')
  .then(res => res.json())
  .then(data => setServices(data));
 },[])
 return (
    <div id="services">
       <h2 className="text-primary mt-3">Our Services</h2>
      <div className="service-container">
         {
         services.map(service => <Service
         key= {service.id}
         service = {service}
         ></Service>)
         }
      </div>
    </div>
  
 );
};

export default Services;