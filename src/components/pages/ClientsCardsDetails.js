import React from 'react';

function ClientsCardsDetails(props) {
  return (
    <div className="text-center">
      <h3>Name: {props.name}</h3>
      <h3>DOB: {props.demographics.dob}</h3>
      <h3>Goals: {props.demographics.goals}</h3>
    </div>
  );
}

export default ClientsCardsDetails;
