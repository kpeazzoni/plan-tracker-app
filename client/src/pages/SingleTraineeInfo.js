import React from 'react';

function SingleTraineeInfo({trainee},{traineeDemo}) {
    console.log(trainee, "====")
    const demo= trainee.demographics.length-1
    return (
        <div className='card singleTraineeCards overflow-auto'style={{height: 500}}>
            <div className='card-body'>
           <h3 className="card-text"><b>First Name:</b> {trainee.firstName}</h3>
            <h3 className="card-text"><b>Last Name:</b> {trainee.lastName}</h3>
            <h3 className="card-text"><b>Weight:</b> {trainee.demographics[demo].weight}</h3>
            <h3 className="card-text"><b>Height:</b> {trainee.demographics[demo].height}</h3>
            <h3 className="card-text"><b>DOB:</b> {trainee.dob}</h3>
                <h3 className="card-text"><b>Goals:</b> {trainee.demographics[demo].goals}</h3>
                <h3 className="card-text"><b>Injury History:</b> {trainee.demographics[demo].injuryHistory}</h3>
                <h3 className="card-text"><b>Notes:</b> {trainee.demographics[demo].notes}</h3>
                </div>
        </div>
    )
};

export default SingleTraineeInfo;