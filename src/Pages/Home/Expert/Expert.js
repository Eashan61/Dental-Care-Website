import React from 'react';

const Expert = ({expert}) => {
 const {img, name, expertize} = expert;
 return (
  <div className="col-lg-4 col-sm-6 col-12">
   <img src={img} alt="dentist cartoon" />
   <h3>{name}</h3>
   <p>{expertize}</p>
  </div>
 );
};

export default Expert;