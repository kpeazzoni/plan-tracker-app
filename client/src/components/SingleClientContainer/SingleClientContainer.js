import React, { useState } from 'react';
import SingleClientInfo from '../../pages/SingleClientInfo';
import SingleClientAppts from '../../pages/SingleClientAppts';
import SingleClientWorkout from '../../pages/SingleClientWorkout'
import './SingleClientContainer.css'

function SingleClientContainer() {
    const [client, setClient] = useState(
        {id: 1, name: 'Jane Doe', dob: '1/01/1911', notes: 'Super old.', weight: '130lbs', height: '66in', goals: 'Live even longer!', injuryHistory: 'Every bone has been broken.'}
    );

    const [clientAppts, setClientAppts] = useState([
        {date: 'Tuesday, March 21st', time: '3:30pm-4:30pm', location: 'Planet Fitness', exercises: ['pushups', 'lunges', 'planking']},
        {date: 'Thursday, March 23rd', time: '3:30pm-4:30pm', location: 'Planet Fitness', exercises: ['pullups', 'benchpress', 'ropes']},
        {date: 'Saturday, March 25th', time: '12:00pm-1:00pm', location: 'LA Fitness', exercises: ['treadmill', 'stair stepper', 'cycling']}
    ]);

    // create state of selectedAppt with clientAppt index
    const [apptIndex, setApptIndex] = useState(0);

    return (
      <div class="container sc-container text-start">
        <h1>{client.name}</h1>
        <div class="row">
          <div className="col card">
          <h5 className="card-title">Client Info</h5>
            <SingleClientInfo client={client}/>
          </div>
          <div className="col card overflow-scroll">
            <h5 className="card-title">Upcoming Appointments</h5>
            <SingleClientAppts clientAppts={clientAppts} setApptIndex={setApptIndex}/>
          </div>
          <div className="col card">
          <h5 className="card-title">Workout Plan</h5>
            <SingleClientWorkout clientAppts={clientAppts} apptIndex={apptIndex} />
          </div>
        </div>
      </div>
    );
};

export default SingleClientContainer;