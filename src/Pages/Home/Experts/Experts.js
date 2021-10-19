import React from 'react';

// importing Local Image
import dentist from '../../../images/doctor/dentist.jpg'
import Expert from '../Expert/Expert';

const experts= [
 {
  id: 1,
  img: dentist,
  name: 'Dr. Md. Shamsul Alam (Liton)',
  expertize: 'B.D.S, M.P.H PGT (Bangkok)'
 },
 {
  id: 2,
  img: dentist,
  name: 'Dr. Rafsan Sams Alam',
  expertize: 'B.D.S (DU)'
 }
]

const Experts = () => {
 return (
  <div className="container" id="experts">
   <h2 className="text-primary mt-2">Our Expert Doctors</h2>
   <div className="row">
    {
     experts.map(expert => <Expert
       key ={expert.id}
       expert={expert}
     >

     </Expert>)
    }
   </div>
  </div>
 );
};

export default Experts;