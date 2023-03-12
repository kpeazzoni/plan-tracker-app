import React from 'react';


import '../../src/components/HomepageContainer/HomepageContainer.css'

function AppointmentCards({schedules}) {
  return schedules.map ((schedules, i)=>(
    <div className='card schedulesCards' key={i}>
      <div className='card-body'>
      <h3>Date: {schedules.date}</h3>
      <h3>Start Time: {schedules.startTime}</h3>
      <h3>End Time: {schedules.endTime}</h3>
      </div>
    </div>
  ))
}

export default AppointmentCards;


// function schedulesCards (props){
//   return props.appointements.map((schedules, i)=>(
//       <div className="card text-center">
//         <div className="card-header">
//           <h2>{schedules.appoint_time}</h2>
//         </div>
//         <div className="card-body">{schedules.details}</div>
//       </div>
//   ));
//   }
  
//   export default schedulesCards;


//   return clients.map((client, i) => (
//     <div className='allClients-per' key={i}>
//         <p><b>Name:</b> {client.name}</p>
//         <p><b>DOB:</b> {client.dob}</p>
//         <p><b>Notes:</b> {client.notes}</p>
//     </div>
// ));