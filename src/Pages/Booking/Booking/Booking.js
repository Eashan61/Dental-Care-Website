import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
 const {serviceId} = useParams();

 const [details, setDetails] = useState({});
 useEffect(()=> {
  fetch('/services.json')
  .then(res => res.json())
  .then(data => setDetails(data.find(x => parseInt(x.id)=== +serviceId)));
 })
 // console.log(details);

 return (
  <div>
   <h2>Service Booking No: {serviceId}</h2>
   <img src={details.img} alt="" />
   <h3>{details.name}</h3>
   <h3>{details.price} Taka</h3>
   <h3>{details.time}</h3>
   
   
   
   
  </div>
 );
};

export default Booking;


// const {bookingDetails, setBookingDetails} = useState({})
//  useEffect(()=> {
//   fetch('/services.json')
//   .then(res => res.json())
//   .then(data => setBookingDetails(data.find(x => parseInt(x.id)=== +serviceId)));
//  },[])

// console.log(bookingDetails);