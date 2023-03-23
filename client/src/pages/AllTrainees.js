import React from 'react';
import {Link} from 'react-router-dom';


function AllTrainees({trainees}) {
    // console.log(trainees)
    return trainees?.map((trainee, i) => (
        <div className="card allTrainees-per" key={i}>
            <div className='card-body'>
            <Link to={`/SingleTraineeContainer/${trainee._id}`} > 
                <h3 className="card-title"> {trainee.firstName} {trainee.lastName}</h3>
                <h4 className="card-text d-flex justify-content-center"><b>DOB:</b> {trainee.dob}</h4>
                </Link>
            </div>
        </div>
    ));
};

export default AllTrainees;