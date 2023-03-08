import React from 'react';
import '../components/HomepageContainer/HomepageContainer.css'

function TraineesCards ({trainees}){
    return trainees.map((trainee, i)=>(
        <div className='card traineesCards' key={i}>
           <div className='card-body'>
           <h3>Name: {trainee.name}</h3>
           <h3>DOB: {trainee.dob}</h3>
           <h3>Height: {trainee.height}</h3>
           </div>
        </div>
    ))
}

export default TraineesCards;






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