import React from 'react';

function SingleTraineeInfo({trainee},{traineeDemo}) {
    console.log(trainee, "====")
    const demo= trainee.demographics.length-1
    return (
        <div className='card singleTraineeCards overflow-auto scroll'>
            <div className='card-body'>
           <h4 className="card-text"><b>First Name:</b> {trainee.firstName}</h4>
            <h4 className="card-text"><b>Last Name:</b> {trainee.lastName}</h4>
            <h4 className="card-text"><b>Weight:</b> {trainee.demographics[demo].weight}</h4>
            <h4 className="card-text"><b>Height:</b> {trainee.demographics[demo].height}</h4>
            <h4 className="card-text"><b>DOB:</b> {trainee.dob}</h4>
                <h4 className="card-text"><b>Goals:</b> {trainee.demographics[demo].goals}</h4>
                <h4 className="card-text"><b>Injury History:</b> {trainee.demographics[demo].injuryHistory}</h4>
                <h4 className="card-text"><b>Notes:</b> {trainee.demographics[demo].notes}</h4>
                </div>
        </div>
    )
};

export default SingleTraineeInfo;