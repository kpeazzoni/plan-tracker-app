import React from 'react';
import '../components/HomepageContainer/HomepageContainer.css'

function ClientsCards ({clients}){
    return clients.map((client, i)=>(
        <div className='card clientsCards' key={i}>
           <div className='card-body'>
           <h3>Name: {client.name}</h3>
           <h3>DOB: {client.dob}</h3>
           <h3>Height: {client.height}</h3>
           </div>
        </div>
    ))
}

export default ClientsCards;






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