import React from 'react';

function SingleTraineeInfo({trainee},{traineeDemo}) {
    console.log(trainee, "====")
    const demo= trainee.demographics.length-1
    return (
        <div>
           <p className="card-text"><b>First Name:</b> {trainee.firstName}</p>
            <p className="card-text"><b>Last Name:</b> {trainee.lastName}</p>
            <p className="card-text"><b>Weight:</b> {trainee.demographics[demo].weight}</p>
            <p className="card-text"><b>Height:</b> {trainee.demographics[demo].height}</p>
            <p className="card-text"><b>DOB:</b> {trainee.dob}</p>
                <p className="card-text"><b>Goals:</b> {trainee.demographics[demo].goals}</p>
                <p className="card-text"><b>Injury History:</b> {trainee.demographics[demo].injuryHistory}</p>
                <p className="card-text"><b>Notes:</b> {trainee.demographics[demo].notes}</p>
        </div>
    )
};

export default SingleTraineeInfo;