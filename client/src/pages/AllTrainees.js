import React from 'react';
import {Link} from 'react-router-dom';


function AllTrainees({trainees}) {
    // console.log(trainees)
    return trainees?.map((trainee, i) => (
        <div className="card allTrainees-per" key={i}>
            <div className='card-body'>
            <Link to={`/SingleTraineeContainer/${trainee._id}`} > 
                <h4 className="card-title">Name: {trainee.firstName} {trainee.lastName}</h4>
                <h5 className="card-text"><b>DOB:</b> {trainee.dob}</h5>
                <h5 className="card-title">{trainee.name}</h5>
                <p className="card-text"><b>DOB:</b> {trainee.dob}</p>
                <p className="card-text"><b>Notes:</b> {trainee.notes}</p>
                </Link>
            </div>
        </div>
    ));
};

export default AllTrainees;