import React from "react";
// import 'bootstrap/dist/css/bootstrap.css'
// import "../../App.css"
import { useState, useEffect } from "react";
import AppointmentsCards from "./AppointmentsCards";
// import AppointmentsCardsDetails from "./AppointmentsCardsDetails";
// import CardsContainer from "./CardsContainer";
import ClientsCards from "./ClientsCards";
// import ClientsCardsDetails from "./ClientsCardsDetails";
// import Col from "./Col";
// import Row from "./Row";

export default function HomepageContainer() {
  const [clients, setclient] = useState([
    { clientname: "a", details: "b" },
    { clientname: "11a", details: "b" },
    { clientname: "12a", details: "b" },
  ]);
  const [appointments, setAppotintments] = useState([
    { appoint_time: "10a", details: "b" },
    { appoint_time: "11a", details: "b" },
    { appoint_time: "12a", details: "b" },
  ]);
  return (
    <CardsContainer>
      <h2>HomePage</h2>
      <row>
        <col size="md-5">
          <AppointmentsCards heading={Dates || "Today's appointments"}>
            {Dates ? (
              <AppointmentsCards
                date={appointments.appoint_time}
                // start={props.start}
                // end={props.end}
                // exercise={props.exercises}
              />
            ) : (
              <h3>No Scheduled Appointments to Display</h3>
            )}
          </AppointmentsCards>
        </col>
      </row>
    </CardsContainer>
  );
}

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
