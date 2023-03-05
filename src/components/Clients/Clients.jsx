import React from 'react';
import './Clients.css'

function Clients({clients}) {
    return clients.map((client, i) => (
        <div class="card allClients-per">
            <div className='card-body' key={i}>
                <h5 class="card-title">{client.name}</h5>
                <p class="card-text"><b>DOB:</b> {client.dob}</p>
                <p class="card-text"><b>Notes:</b> {client.notes}</p>
            </div>
        </div>
    ));
};

export default Clients;