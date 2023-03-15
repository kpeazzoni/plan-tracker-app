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
                <h3 className="card-text">Reps: {workout.reps}</h3>
                <h3 className="card-text">Sets: {workout.sets}</h3>
                <h3 className="card-text">Weight: {workout.weight}</h3>
                <h3 className="card-text">Distance/Time: {workout.distanceOrTime}</h3>
                <h3 className="card-text">Equipment: {workout.equipmentReq}</h3>
                <h3 className="card-text">Notes: {workout.notes}</h3>
        
            </div>
            ))}
    </div>
    );
};

    // function SingleTraineeWorkout({traineeAppts, apptIndex}) {
    //     const appt = traineeAppts && traineeAppts [apptIndex];
    // // console.log(appt);
    //     return (
    //     <div >
    //         {/* <h5>{appt.startDate}</h5> */}
    //             {appt?.workouts.map((workout) => (
    //             <div className='clientWorkOuts-cards'>
    //                 <h3 className="card-text">{workout.exerciseName}</h3>
    //             </div>
    //             ))}
    //     </div>
    //     );
    // };

export default SingleTraineeWorkout;