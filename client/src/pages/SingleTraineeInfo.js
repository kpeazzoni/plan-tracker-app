import React from 'react';

function SingleTraineeInfo({trainee}) {
    console.log(trainee, "====")
    return (
        <div>
           <p className="card-text"><b>First Name:</b> {trainee.firstName}</p>
            <p className="card-text"><b>Last Name:</b> {trainee.lastName}</p>
            {/* <p className="card-text"><b>Weight:</b> {trainee.demographics.weight}</p>
            <p className="card-text"><b>Height:</b> {trainee.demographics.height}</p> */}
            <p className="card-text"><b>DOB:</b> {trainee.dob}</p>
                {/* <p className="card-text"><b>Goals:</b> {trainee.demographics.goals}</p>
                <p className="card-text"><b>Injury History:</b> {trainee.demographics.injuryHistory}</p>
                <p className="card-text"><b>Notes:</b> {trainee.demographics.notes}</p> */}
        </div>
    )
};

export default SingleTraineeInfo;