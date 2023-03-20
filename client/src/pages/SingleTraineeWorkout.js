import React from 'react';
import dayjs from "dayjs";
import ScheduleAppointmentModal from "../components/ScheduleAppointmentModal/ScheduleAppointmentModal";

function SingleTraineeWorkout({traineeAppts, apptIndex}) {
    console.log ("traineeAppts", traineeAppts.length)
    if (traineeAppts.length > 0) {
    const appt = traineeAppts && traineeAppts [apptIndex];
    const apptDay = dayjs(appt.startDate).format('MM/DD/YYYY');

    return (
        <>
        <h5><b>Selected Appointment: </b>{apptDay}</h5>
        
        <div className='overflow-auto scroll'>
        
        
            {appt.workouts.length ? appt.workouts.map((workout) => (
            <div className='clientWorkOuts-cards'>     
            
                <h4 className="card-text">{workout.exerciseName}</h4>
                <h5 className="card-text">Reps: {workout.reps} Sets: {workout.sets}</h5>
                <h5 className="card-text">Weight: {workout.weight} Equipment: {workout.equipmentReq}</h5>
                <h5 className="card-text">Distance/Time: {workout.distanceOrTime}</h5>
                <h5 className="card-text">Notes: {workout.notes}</h5>

        
            </div>
            )) : (
                <>
                <h3><i>No Workouts Added!</i></h3>
                </>
            )}
    </div>
    </>
    );} else {return <> <h3><i>No Appointments Scheduled!</i></h3>
    </>}
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