import React from 'react';
import './Clients.css'

function Clients({clients}) {
    return clients.map((client, i) => (
        <div className='allClients-per' key={i}>
            <p><b>Name:</b> {client.name}</p>
            <p><b>DOB:</b> {client.dob}</p>
            <p><b>Notes:</b> {client.notes}</p>
        </div>
    ));
};

export default Clients;