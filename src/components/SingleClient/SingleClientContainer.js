import React, { useState } from 'react';
import SingleClientInfo from './SingleClientInfo';
// import './ClientsContainer.css'

function SingleClientContainer() {
    const [client, setClient] = useState(
        {id: 1, name: 'Jane Doe', dob: '1/01/1911', notes: 'Super old.', weight: '130lbs', height: '66in', goals: 'Live even longer!', injuryHistory: 'Every bone has been broken.'}
    );

    const [clientAppts, setClientAppts] = useState([
        {date: 'Tuesday, March 21th', time: '3:30pm-4:30pm', location: 'Planet Fitness', exercises: ['pushups', 'lunges', 'planking']},
        {date: 'Thursday, March 23th', time: '3:30pm-4:30pm', location: 'Planet Fitness', exercises: ['pullups', 'benchpress', 'ropes']},
        {date: 'Saturday, March 25th', time: '12:00pm-1:00pm', location: 'LA Fitness', exercises: ['treadmill', 'stair stepper', 'cycling']}
    ]);

    return (
      <div class="container text-center">
        <h1 className="text-start">{client.name}</h1>
        <div class="row">
          <div className="col card text-start">
            <SingleClientInfo client={client}/>
          </div>
          <div className="col card">Column</div>
          <div className="col card">Column</div>
        </div>
      </div>
    );
};

export default SingleClientContainer;