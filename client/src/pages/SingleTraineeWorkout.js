import React from 'react';

function SingleTraineeWorkout({traineeAppts, apptIndex}) {
    const appt = traineeAppts && traineeAppts [apptIndex];
// console.log(appt);
    return (
    <div >
        {/* <h5>{appt.startDate}</h5> */}
        
            {appt?.workouts.map((workout) => (
            <div className='clientWorkOuts-cards'>
                <h3 className="card-text">{workout.exerciseName}</h3>
            </div>
            ))}
        
    </div>
    );
};

export default SingleTraineeWorkout;