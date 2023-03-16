import React from 'react';
import { Link } from 'react-router-dom';

import '../components/HomepageContainer/HomepageContainer.css'

function AppointmentsCards({appointments}) {
  return (<div className ='overflow-auto scrollHP'> 
  {appointments.length ? appointments.map ((appointment, i)=>(
    <div className='card appointmentsCards'key={i}>
      <div className='card-body'>
      <Link to={`/SingleTraineeContainer/${appointment.traineeId._id}`} > 
      <h3>Trainee: {appointment.traineeId.firstName} {appointment.traineeId.lastName}</h3>
      {/* <h3>Date: {appointment.startDate}</h3> */}
      <h3>Start Time: {appointment.startDate}</h3>
      <h3>End Time: {appointment.endDate}</h3>
      </Link>
      </div>
    </div>
  )) : (
    <h3><i>Your Schedule is Clear!</i></h3>
  )}
  </div> )
}

export default AppointmentsCards;


// function AppointmentsCards (props){
//   return props.appointements.map((appointment, i)=>(
//       <div className="card text-center">
//         <div className="card-header">
//           <h2>{appointment.appoint_time}</h2>
//         </div>
//         <div className="card-body">{appointment.details}</div>
//       </div>
//   ));
//   }
  
//   export default AppointmentsCards;


//   return clients.map((client, i) => (
//     <div className='allClients-per' key={i}>
//         <p><b>Name:</b> {client.name}</p>
//         <p><b>DOB:</b> {client.dob}</p>
//         <p><b>Notes:</b> {client.notes}</p>
//     </div>
// ));