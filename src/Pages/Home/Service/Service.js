import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

 const {id, name, price, time, img} = service;
 return (
  <div className="service">
   <img src={img} alt="" />
   <h3 className="title">{name}</h3>
   <h5>{time} Needed</h5>
   <h5>{price} Taka</h5>
   <Link to={`/booking/${id}`}>
   <button className="btn btn-primary mb-3">Book {name.toLowerCase()}</button>
   </Link>
  </div>
 );
};

export default Service;