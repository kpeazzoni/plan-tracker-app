import React, {useState} from 'react';
import dayjs from "dayjs";
import Modal from 'react-bootstrap/Modal';
import {useMutation } from '@apollo/client';
import {REMOVE_WORKOUTS} from "../utils/mutations";
import {UPDATE_WORKOUTS} from "../utils/mutations";

function SingleTraineeWorkout({ traineeAppts, apptIndex}) {

    const [removeWorkouts] = useMutation(REMOVE_WORKOUTS)
    const [updateWorkouts] = useMutation(UPDATE_WORKOUTS)

    const [formState, setFormState] = useState({
      muscleGroup: '',
      exerciseName: '',
      sets: '',
      reps: '',
      weight: '',
      distanceOrTime: '',
      equipmentReq: '',
      notes: '',
    });



    if (traineeAppts.length > 0) {
    const appt = traineeAppts && traineeAppts [apptIndex];
    const apptDay = dayjs(appt.startDate).format('MM/DD/YYYY');
    
    const handleRemoveWorkouts = async (e) => {
        e.preventDefault();
        try {
          const { data, error } = await removeWorkouts({
            variables: { scheduleId: appt._id, workoutId: e.target.id},
          });
        } catch (err) {
          console.error(err);
        }
      }

    const handleUpdateWorkouts = async(e) => {
      e.preventDefaule();

    }




    return (
        <>
        <h5><b>Selected Appointment: </b>{apptDay}</h5>
        
        <div className='overflow-auto scroll'>
        
        
            {appt.workouts.length ? appt.workouts.map((workout, i) => (
            <div className='clientWorkOuts-cards'>     

                <h4 className="card-text">{workout.exerciseName}</h4>
                <h5 className="card-text">Reps: {workout.reps} Sets: {workout.sets}</h5>
                <h5 className="card-text">Weight: {workout.weight} Equipment: {workout.equipmentReq}</h5>
                <h5 className="card-text">Distance/Time: {workout.distanceOrTime}</h5>
                <h5 className="card-text">Notes: {workout.notes}</h5>
                 <button className= 'btn onWhite' id={workout._id}
                 onClick= {handleRemoveWorkouts}
                >Delete</button>
                <button className = 'btn onWhite' id={workout._id} onClick={handleUpdateWorkouts}>Edit</button>
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
export default SingleTraineeWorkout;