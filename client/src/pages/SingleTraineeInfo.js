import React from 'react';

function SingleTraineeInfo({trainee},{traineeDemo}) {
    console.log(trainee, "====")
    return (
        <div>
           <p className="card-text"><b>First Name:</b> {trainee.firstName}</p>
            <p className="card-text"><b>Last Name:</b> {trainee.lastName}</p>
            <p className="card-text"><b>Weight:</b> {trainee.demographics[0].weight}</p>
            <p className="card-text"><b>Height:</b> {trainee.demographics[0].height}</p>
            <p className="card-text"><b>DOB:</b> {trainee.dob}</p>
                <p className="card-text"><b>Goals:</b> {trainee.demographics[0].goals}</p>
                <p className="card-text"><b>Injury History:</b> {trainee.demographics[0].injuryHistory}</p>
                <p className="card-text"><b>Notes:</b> {trainee.demographics[0].notes}</p>
        </div>
    )
};

export default SingleTraineeInfo;