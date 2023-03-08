import React, { useState } from 'react';
import AllTrainees from '../../pages/AllTrainees';
import './AllTraineesContainer.css'

function AllTraineesContainer() {
    const [trainees, setTrainees] = useState([
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
        <div className='allTrainees-wrapper'>
            <AllTrainees trainees={trainees} />
        </div>
    )
};

export default AllTraineesContainer;