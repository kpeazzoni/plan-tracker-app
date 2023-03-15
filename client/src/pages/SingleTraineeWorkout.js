import React from 'react';

function SingleTraineeWorkout({traineeAppts, apptIndex}) {
    const appt = traineeAppts && traineeAppts [apptIndex];
// console.log(appt);
    return (
    <div >
        {/* <h5>{appt.startDate}</h5> */}
        
            {appt?.workouts.map((workout) => (
            <div className='clientWorkOuts-cards'>     
            
                <h4 className="card-text">{workout.exerciseName}</h4>
                <h5 className="card-text">Reps: {workout.reps} Sets: {workout.sets}</h5>
                <h5 className="card-text">Weight: {workout.weight} Equipment: {workout.equipmentReq}</h5>
                <h5 className="card-text">Distance/Time: {workout.distanceOrTime} Notes: {workout.notes}</h5>
        
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