import React from 'react';
import {Link} from 'react-router-dom';


function AllTrainees({trainees}) {
    // console.log(trainees)
    return trainees?.map((trainee, i) => (
        <div className="card allTrainees-per" key={i}>
            <div className='card-body'>
            <Link to={`/SingleTraineeContainer/${trainee._id}`} > 
                <h5 className="card-title">Name: {trainee.firstName} {trainee.lastName}</h5>
                <h5 className="card-text"><b>DOB:</b> {trainee.dob}</h5>
                </Link>
            </div>
        </div>
    ));
};

export default AllTrainees;