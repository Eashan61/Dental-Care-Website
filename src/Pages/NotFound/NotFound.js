import React from 'react';
import { Link } from 'react-router-dom';
// importing 404 error image
import notfound from '../../images/404.jpg'

const NotFound = () => {
 return (
  <div>
   <div>
   <img className="w-100" src={notfound} alt="" />
   </div>
   <Link
   to="/"
   ><button className="btn btn-danger">Go Back</button></Link>
  </div>
 );
};

export default NotFound;