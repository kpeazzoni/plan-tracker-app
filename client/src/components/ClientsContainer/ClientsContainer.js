import React, { useState } from 'react';
import Clients from '../Clients/Clients';
import './ClientsContainer.css'

function ClientsContainer() {
    const [clients, setClients] = useState([
        {name: 'Jane Doe', dob: '1/01/1911', notes: 'Super old.'}, 
        {name: 'John Doe', dob: '2/02/1922', notes: 'Very old.'}, 
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'},
        {name: 'James Doe', dob: '3/03/1933', notes: 'Really old.'}
    ]);

    return (
        <div className='allClients-wrapper'>
            <Clients clients={clients} />
        </div>
    )
};

export default ClientsContainer;