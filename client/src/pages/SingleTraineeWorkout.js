import React from 'react';

function SingleTraineeWorkout({traineeAppts, apptIndex}) {
    const appt = traineeAppts && traineeAppts [apptIndex];
// console.log(appt);
    return (
    <div>
        {/* <h5>{appt.startDate}</h5> */}
        <ul>
            {appt?.workouts.map((workout) => (
            <li>
                <p className="card-text">{workout.exerciseName}</p>
            </li>
            ))}
        </ul>
    </div>
    );
};

export default SingleTraineeWorkout;