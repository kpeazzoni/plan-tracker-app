import React from 'react';


function AllTrainees({trainees}) {
    return trainees.map((trainee, i) => (
        <div class="card allTrainees-per">
            <div className='card-body' key={i}>
                <h4 class="card-title">Name: {trainee.firstName} {trainee.lastName}</h4>
                <h5 class="card-text"><b>DOB:</b> {trainee.dob}</h5>
            </div>
        </div>
    ));
};

export default AllTrainees;