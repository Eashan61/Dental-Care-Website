import React from 'react';

const AboutUs = () => {
 return (
  <div className="Container">
   <h3 className="text-primary" >Our Branches:</h3>

   <div className="row">

   <div className="col-lg-4 col-sm-6 col-12">
     <h4>RANKIN DENTAL CARE</h4>
     <p>14, rankin streen wari,Dhaka</p>
     <p>Phone: 0257164742</p>
     <p>Time: 6pm-10pm</p>
    </div>
    <div className="col-lg-4 col-sm-6 col-12">
     <h4>SAFE-PLUS DENTAL CARE</h4>
     <p>Concord Arcadia Shopping Mall <br /> 4th floor, Road #4 <br />Dhanmondi, Dhaka.</p>
     <p>Phone: 029615271</p>
     <p>Time: 2pm-7pm</p>
    </div>

   </div>
   
    
   
  </div>
 );
};

export default AboutUs;