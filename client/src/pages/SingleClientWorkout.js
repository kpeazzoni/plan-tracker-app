import React from 'react';

function SingleClientWorkout({clientAppts, apptIndex}) {
    const appt = clientAppts[apptIndex];

    return (
    <div>
        <h5>{appt.date}</h5>
        <ul>
            {appt.exercises.map((exercise) => (
            <li>
                <p className="card-text">{exercise}</p>
            </li>
            ))}
        </ul>
    </div>
    );
};

export default SingleClientWorkout;