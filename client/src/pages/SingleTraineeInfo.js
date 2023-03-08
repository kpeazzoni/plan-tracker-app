import React from 'react';

function SingleTraineeInfo({trainee}) {
    return (
        <div>
            <p className="card-text"><b>Weight:</b> {trainee.weight}</p>
            <p className="card-text"><b>Height:</b> {trainee.height}</p>
            <p className="card-text"><b>DOB:</b> {trainee.dob}</p>
            <p className="card-text"><b>Goals:</b> {trainee.goals}</p>
            <p className="card-text"><b>Injury History:</b> {trainee.injuryHistory}</p>
            <p className="card-text"><b>Notes:</b> {trainee.notes}</p>
        </div>
    )
};

export default SingleTraineeInfo;