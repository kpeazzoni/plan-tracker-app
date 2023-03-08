import React, { useState } from 'react';
import SingleTraineeInfo from '../../pages/SingleTraineeInfo';
import SingleTraineeAppts from '../../pages/SingleTraineeAppts';
import SingleTraineeWorkout from '../../pages/SingleTraineeWorkout'
import './SingleTraineeContainer.css'

function SingleTraineeContainer() {
    const [trainee, setTrainee] = useState(
        {id: 1, name: 'Jane Doe', dob: '1/01/1911', notes: 'Super old.', weight: '130lbs', height: '66in', goals: 'Live even longer!', injuryHistory: 'Every bone has been broken.'}
    );

    const [traineeAppts, setTraineeAppts] = useState([
        {date: 'Tuesday, March 21st', time: '3:30pm-4:30pm', location: 'Planet Fitness', exercises: ['pushups', 'lunges', 'planking']},
        {date: 'Thursday, March 23rd', time: '3:30pm-4:30pm', location: 'Planet Fitness', exercises: ['pullups', 'benchpress', 'ropes']},
        {date: 'Saturday, March 25th', time: '12:00pm-1:00pm', location: 'LA Fitness', exercises: ['treadmill', 'stair stepper', 'cycling']}
    ]);

    // create state of index of selected appt
    const [apptIndex, setApptIndex] = useState(0);

    return (
      <div class="container singleTrainee-container text-start">
        <h1>{trainee.name}</h1>
        <div class="row">
          <div className="col card">
          <h5 className="card-title">Trainee Info</h5>
            <SingleTraineeInfo trainee={trainee}/>
          </div>
          <div className="col card overflow-scroll">
            <h5 className="card-title">Upcoming Appointments</h5>
            <SingleTraineeAppts traineeAppts={traineeAppts} setApptIndex={setApptIndex}/>
          </div>
          <div className="col card">
          <h5 className="card-title">Workout Plan</h5>
            <SingleTraineeWorkout traineeAppts={traineeAppts} apptIndex={apptIndex} />
          </div>
        </div>
      </div>
    );
};

export default SingleTraineeContainer;