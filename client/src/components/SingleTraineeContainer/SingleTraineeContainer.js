import React, { useState, useEffect } from "react";
import SingleTraineeInfo from "../../pages/SingleTraineeInfo";
import SingleTraineeAppts from "../../pages/SingleTraineeAppts";
import SingleTraineeWorkout from "../../pages/SingleTraineeWorkout";
import "./SingleTraineeContainer.css";
import { useQuery } from "@apollo/client";
import { QUERY_TRAINEE } from "../../utils/queries";
import {useParams} from "react-router-dom";
import UpdateTraineeModal from '../UpdateClientModal/UpdateTraineeModal'
import ScheduleAppointmentModal from "../ScheduleAppointmentModal/ScheduleAppointmentModal";
import EditWorkoutPlanModal from "../EditWorkoutPlanModal/EditWorkoutPlanModal";

// import { QUERY_SCHEDULES } from "../../utils/queries";
// import { QUERY_TRAINEE } from '../../utils/queries';

function SingleTraineeContainer(props) {
  const [trainee, setTrainee] = useState();
  const [traineeAppts, setTraineeAppts] = useState();


  const { data, error } = useQuery(QUERY_TRAINEE, {
    variables: {
      traineeId: useParams().traineeId
      //  props.trainerId
    },
    pollInterval: 5000 // refetch the query every 5 seconds
  });
useEffect(() => {
  setTrainee(data?.trainee)
  setTraineeAppts(data?.trainee.traineeSchedule)

},[data]);
  // const {data: singleTraineeInfo, error: singleTraineeError} = useQuery(QUERY_TRAINEE)
  // console.log(data, "this is data");
  // const {data: singleTraineeAppts, error: singleTraineeApptError} = useQuery(QUERY_SCHEDULES);
  // const {data: singleTraineeWorkout, error: singleTraineeWorkoutError} = useQuery(QUERY_SCHEDULES);
  // const singleTraineeData = data?.trainee || {};
  const singleTraineeSchedule = data?.trainee.traineeSchedule || {};
  // const singleTraineeWorkout = data?.traineeSchedule.workouts || {};
  // setTrainee(singleTraineeData);

  // console.log(trainee, "this is singletraineeData");
  // console.log(singleTraineeAppts);
  // create state of index of selected appt
  const firstName = data?.trainee.firstName || "";
  const lastName = data?.trainee.lastName || "";
  const [apptIndex, setApptIndex] = useState(0);

  return (
    <main>
      <h1 className="oneTrainee">{firstName} {lastName}</h1>
        <div className="singleTrainee-container">
      {/* <h1>{trainee.firstName}</h1> */}
      
    
      <aside className="col-md-4 mb-auto mx-auto">
      <div className="clientinfo-container">
        <div className = "cardBtn">
         {trainee && (<UpdateTraineeModal trainee = {trainee} />)}
         </div>
          <h3 className="card-title">Client Info</h3>
          {trainee && (
            <SingleTraineeInfo trainee={trainee} />
          )}
          {/* <SingleTraineeInfo trainee={singleTraineeData}/> */}
          </div>
       </aside>


       <aside className="col-md-4 mb-auto mx-auto">
        <div className="clientAppt-container">
        <div className = "cardBtn">
          {trainee && (<ScheduleAppointmentModal trainee = {trainee} />)}
          </div>
          <h3 className="card-title">Upcoming Appointments</h3>
          {trainee && (<SingleTraineeAppts
            traineeAppts={traineeAppts}
            setApptIndex={setApptIndex}
            trainee = {trainee}
            apptIndex= {apptIndex}
          />)}
         </div>
        </aside>


        <aside className="col-md-4 mb-auto mx-auto">
        <div className="clientWorkOuts-container">
        <div className = "cardBtn">
          {trainee && (<EditWorkoutPlanModal trainee = {trainee} traineeAppts = {traineeAppts} traineeApptIndex ={apptIndex} />)}
          </div>
          <h3 className="card-title">Workout Plan</h3>
         {trainee && (<SingleTraineeWorkout
            traineeAppts={traineeAppts}
            apptIndex={apptIndex}
          />)}
          
        </div>
        </aside>



    </div>
    </main>
  );
}

export default SingleTraineeContainer;