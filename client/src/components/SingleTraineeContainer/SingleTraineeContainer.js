import React, { useState, useEffect } from "react";
import SingleTraineeInfo from "../../pages/SingleTraineeInfo";
import SingleTraineeAppts from "../../pages/SingleTraineeAppts";
import SingleTraineeWorkout from "../../pages/SingleTraineeWorkout";
import "./SingleTraineeContainer.css";
import { useQuery } from "@apollo/client";
import { QUERY_TRAINEE } from "../../utils/queries";
import {useParams} from "react-router-dom";
import UpdateTraineeButtons from "../Buttons/updateTraineebuttons";
import {Link} from 'react-router-dom'

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
  const [apptIndex, setApptIndex] = useState(0);

  return (
    <div class="container singleTrainee-container text-start">
      {/* <h1>{trainee.firstName}</h1> */}
      <div class="row">
        <div className="col card">
        <Link to="/updateclientmodal"><UpdateTraineeButtons /></Link>
          <h5 className="card-title">Trainee Info</h5>
          {trainee && (
            <SingleTraineeInfo trainee={trainee} />
          )}
          {/* <SingleTraineeInfo trainee={singleTraineeData}/> */}
        </div>
        <div className="col card overflow-scroll">
          <h5 className="card-title">Upcoming Appointments</h5>
          <SingleTraineeAppts
            traineeAppts={traineeAppts}
            setApptIndex={setApptIndex}
          />
        </div>
        <div className="col card">
          <h5 className="card-title">Workout Plan</h5>
          <SingleTraineeWorkout
            traineeAppts={traineeAppts}
            apptIndex={apptIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleTraineeContainer;
