import React from 'react';

function ClientsCards (props){
  console.log(props)
    return (
        <div className="card text-center">
          <div className="card-header">
            <h2>{props.clientname}</h2>
          </div>
          <div className="card-body">{props.details}</div>
        </div>
      );
    }
    
    export default ClientsCards;
    