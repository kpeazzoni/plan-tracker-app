import React from 'react';
import {Link} from 'react-router-dom';


function AllTrainees({trainees}) {
    return trainees.map((trainee, i) => (
        <div class="card allTrainees-per">
            <div className='card-body' key={i}>
            <Link to={`/SingleClientContainer/${trainee._id}`} > 
                <h4 class="card-title">Name: {trainee.firstName} {trainee.lastName}</h4>
                <h5 class="card-text"><b>DOB:</b> {trainee.dob}</h5>
                <h5 class="card-title">{trainee.name}</h5>
                <p class="card-text"><b>DOB:</b> {trainee.dob}</p>
                <p class="card-text"><b>Notes:</b> {trainee.notes}</p>
                </Link>
            </div>
        </div>
    ));
};

export default AllTrainees;