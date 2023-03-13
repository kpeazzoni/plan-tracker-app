import React, { useEffect, useState } from 'react';
import SingleTraineeInfo from '../../pages/SingleTraineeInfo';
import SingleTraineeAppts from '../../pages/SingleTraineeAppts';
import SingleTraineeWorkout from '../../pages/SingleTraineeWorkout'
import './SingleTraineeContainer.css'
import {useQuery} from "@apollo/client";
import {QUERY_TRAINEE, QUERY_SINGLETRAINEE} from "../../utils/queries";
import {QUERY_SCHEDULES} from "../../utils/queries";
import {useParams} from "react-router-dom";

function SingleTraineeContainer() {
  // const [trainee, setTrainee] = useState();

  const [traineeAppts, setTraineeAppts] = useState();
  
  const {data, error} = useQuery(QUERY_SINGLETRAINEE, {
    variables: {
     traineeId: useParams().traineeId
    }
  });
// useEffect(() => setTrainee(data.trainee),[data]);
  // const {data: singleTraineeInfo, error: singleTraineeError} = useQuery(QUERY_TRAINEE)
    
  // const {data: singleTraineeAppts, error: singleTraineeApptError} = useQuery(QUERY_SCHEDULES);
  // const {data: singleTraineeWorkout, error: singleTraineeWorkoutError} = useQuery(QUERY_SCHEDULES);
  const singleTraineeData = data?.trainee || {};
  
// setTrainee(singleTraineeData);
console.log(singleTraineeData); 
// console.log(singleTraineeAppts);
    // create state of index of selected appt
    const [apptIndex, setApptIndex] = useState(0);

    return (
      <div class="container singleTrainee-container text-start">
        {/* <h1>{trainee.firstName}</h1> */}
        <div class="row">
          <div className="col card">
          <h5 className="card-title">Trainee Info</h5>
          {singleTraineeData && (<SingleTraineeInfo trainee={singleTraineeData}/>)}
          </div>
          <div className="col card overflow-scroll">
            <h5 className="card-title">Upcoming Appointments</h5>
            <SingleTraineeAppts trainee={singleTraineeData} setApptIndex={setApptIndex}/>
          </div>
          <div className="col card">
          <h5 className="card-title">Workout Plan</h5>
            {/* <SingleTraineeWorkout trainee={singleTraineeData} apptIndex={apptIndex} /> */}
          </div>
        </div>
      </div>
    );
};

export default SingleTraineeContainer;