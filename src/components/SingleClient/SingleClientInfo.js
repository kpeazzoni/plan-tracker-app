import React from 'react';
// import './Clients.css'

function SingleClientInfo({client}) {
    return (
        <div>
            <h5 className="card-title">Client Info:</h5>
            <p className="card-text"><b>Weight:</b> {client.weight}</p>
            <p className="card-text"><b>Height:</b> {client.height}</p>
            <p className="card-text"><b>DOB:</b> {client.dob}</p>
            <p className="card-text"><b>Goals:</b> {client.goals}</p>
            <p className="card-text"><b>Injury History:</b> {client.injuryHistory}</p>
            <p className="card-text"><b>Notes:</b> {client.notes}</p>
        </div>
    )
};

export default SingleClientInfo;