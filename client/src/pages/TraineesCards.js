import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_TRAINEES } from '../utils/queries'

import '../components/HomepageContainer/HomepageContainer.css'

// function TraineesCards ({trainees}){
//     const { 
//         firstName,
//         lastName,
//         _id,
//         dob } = useQuery(QUERY_TRAINEES);

    
//         return (
//         <div className='card traineesCards'>
//            <div className='card-body'>
//            <h3>Firstname: ${trainees.firstName}</h3>
//            <h3>Lastname: ${trainees.lastName}</h3>
//            <h3>DOB: ${trainees.dob}</h3>
//            </div>
//         </div>
//     );

    function TraineesCards({ traineeId }) {
        const { loading, error, data } = useQuery(QUERY_TRAINEES, {
          variables: { traineeId },
        });
        console.log(traineeId);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :( </p>;
        const { trainees } = data;
        console.log(data);
        return (
          <div>
            <h1>{`${trainees.firstName} ${trainees.lastName}`}</h1>
            <p>Date of Birth: {trainees.dob}</p>
            {/* <h2>Training Schedule</h2>
            <ul>
              {trainees.traineeSchedule.map((session) => (
                <li key={session._id}>
                  {session.date} - {session.startTime}-{session.endTime} with {session.trainerId._id}
                </li>
              ))}
            </ul> */}
            {/* <h2>Demographics</h2>
            <p>Goals: {trainees.demographics.goals}</p>
            <p>Height: {trainees.demographics.height}</p>
            <p>Injury History: {trainees.demographics.injuryHistory}</p>
            <p>Notes: {trainees.demographics.notes}</p>
            <p>Weight: {trainees.demographics.weight}</p> */}
          </div>
        );
      

    // return trainees.map((trainee, i)=>(
    //     <div className='card traineesCards' key={i}>
    //        <div className='card-body'>
    //        <h3>Firstname: {trainee.firstName}</h3>
    //        <h3>Lastname: {trainee.lastName}</h3>
    //        <h3>DOB: {trainee.dob}</h3>
    //        </div>
    //     </div>
    // ))
}

// export default TraineesCards;






// function ClientsCardsDetails(props) {
//     return (
//       <div className="text-center">
//         <h3>Name: {props.name}</h3>
//         <h3>DOB: {props.demographics.dob}</h3>
//         <h3>Goals: {props.demographics.goals}</h3>
//       </div>
//     );
//   }
  
//   export default ClientsCardsDetails;



//   function ClientsCardsDetails(props) {
//     return (
//       <div className="text-center">
//         <h3>Name: {props.name}</h3>
//         <h3>DOB: {props.demographics.dob}</h3>
//         <h3>Goals: {props.demographics.goals}</h3>
//       </div>
//     );
//   }
  
//   export default ClientsCardsDetails;