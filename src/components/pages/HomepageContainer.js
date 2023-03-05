// import React from "react";
// // import 'bootstrap/dist/css/bootstrap.css'
// // import "../../App.css"
// import { useState, useEffect } from "react";
// import AppointmentsCards from "./AppointmentsCards";
// // import AppointmentsCardsDetails from "./AppointmentsCardsDetails";
// // import CardsContainer from "./CardsContainer";
// import ClientsCards from "./ClientsCards";
// // import ClientsCardsDetails from "./ClientsCardsDetails";
// // import Col from "./Col";
// // import Row from "./Row";

// export default function HomepageContainer() {
//   const [clients, setclient] = useState([
//     { name: "Karen", dob: "8/19/1989", height:"5'7" },
//     { name: "Chris", dob: "1/20/1987", height:"5'6"},
//     { name: "Erin", dob: "5/17/2002", height:"5'3"},
//   ]);
//   const [appointments, setAppotintments] = useState([
//     { date: "3/5/23", start_time:"9AM", end_time:"10AM", exercise:"arm" },
//     { date: "3/5/23", start_time:"10AM", end_time:"11AM", exercise:"leg" },
//     { date: "3/5/23", start_time:"6AM", end_time:"7AM", exercise:"shoulder"  },
//   ]);
//   return (
//  <div className="">

//  </div>
//   );
// }

{
  /* <main className="container">
<h2>Project3</h2>
<section className="row">
<aside className="col-md-5">
    <h3>Today's Appointment</h3>
    {appointments.map((element,key) => {
        return(<AppointmentsCards key={key}
            appoint_time={element.appoint_time}
            details={element.details}/>)
    })}
</aside>
<aside className="col-md-2"> 

</aside>
<aside className="col-md-5">
    <h3>Clients</h3>
{clients.map((element,key) => {
    return(<ClientsCards key={key}
        clientname={element.clientname}
        details={element.details}/>)
})}
    
</aside>
</section>
</main> */
}

{
  /* <CardsContainer>
<h2>HomePage</h2>
<Row>
    <Col size = 'md-5'>
        <AppointmentsCards heading = { Dates || "Today's appointments"}>
            {Dates ? (
                <AppointmentsCardsDetails 
                date={Dates}
                start={props.start}
                end={props.end}
                exercise={props.exercises}
                />

            ):(
                <h3>No Scheduled Appointments to Display</h3>
            )}
        </AppointmentsCards>
    </Col>
</Row>
</CardsContainer> */
}
