import React, { useState } from 'react';
import SingleClientInfo from './SingleClientInfo';
import SingleClientAppts from './SingleClientAppts';
import './SingleClient.css'

function SingleClientContainer() {
    const [client, setClient] = useState(
        {id: 1, name: 'Jane Doe', dob: '1/01/1911', notes: 'Super old.', weight: '130lbs', height: '66in', goals: 'Live even longer!', injuryHistory: 'Every bone has been broken.'}
    );

    const [clientAppts, setClientAppts] = useState([
        {date: 'Tuesday, March 21st', time: '3:30pm-4:30pm', location: 'Planet Fitness', exercises: ['pushups', 'lunges', 'planking']},
        {date: 'Thursday, March 23rd', time: '3:30pm-4:30pm', location: 'Planet Fitness', exercises: ['pullups', 'benchpress', 'ropes']},
        {date: 'Saturday, March 25th', time: '12:00pm-1:00pm', location: 'LA Fitness', exercises: ['treadmill', 'stair stepper', 'cycling']}
    ]);

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
            <SingleClientAppts clientAppts={clientAppts} />
          </div>
          <div className="col card">
          <h5 className="card-title">Workout Plans</h5>
          </div>
        </div>
      </div>
    );
};

export default SingleClientContainer;