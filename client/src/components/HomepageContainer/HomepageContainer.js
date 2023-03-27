import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { QUERY_SCHEDULES, QUERY_ME, QUERY_TRAINEES } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import AppointmentsCards from "../../pages/AppointmentsCards";
import TraineesCards from "../../pages/TraineesCards";
import "./HomepageContainer.css";
import FullscheduleButtons from "../Buttons/fullschedulebuttons";
import AddTraineeButtons from "../Buttons/addTraineebuttons";
import ViewallTraineesButtons from "../Buttons/viewallTraineesbuttons";
import dayjs from "dayjs";



export default function HomepageContainer() {
  const { loading, data } = useQuery(QUERY_ME);
console.log(data, "this is query_me data");
  const schedules = data?.me.trainerSchedule || [];
  const trainees = data?.me.trainees || [];
  const firstName = data?.me.firstName || "";
  const todaysDate = dayjs().format('YYYY-MM-DD');
  // let currentTime = displayTime()
  // dayjs().format('YYYY-MM-DD hh:mm:ss A');
  const todaysSchedule = schedules.filter(appointment => appointment.startDate.slice(0, -9) === todaysDate);

  const [currentTime, setCurrentTime] = useState(displayTime());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentTime(displayTime());
    }, 1000)
  })

  function displayTime(){
    return dayjs().format('MMMM DD, YYYY [at] hh:mm:ss A');
  }

//   function displayTime() {
//    let currentTime = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss A');
//    return currentTime;
//    }
//  displayTime()
//  setInterval(displayTime, 1000); 


  console.log(data);
  console.log('schedules', schedules)
  console.log('trainees', trainees)
  //   const [trainees, setTrainees] = useState(
  //     []
  //         [
  //         { firstName: "Karen", lastName: "Smith",  dob: "8/19/1989", height:"5'7" },
  //         { name: "Chris", dob: "1/20/1987", height:"5'6"},
  //         { name: "Erin", dob: "5/17/2002", height:"5'3"},
  //     ]
  //   );


  //   const [appointments, setAppotintments] = useState(
  //     [
  //     { date: "3/5/23", start_time: "9AM", end_time: "10AM", exercise: "arm" },
  //     { date: "3/5/23", start_time: "10AM", end_time: "11AM", exercise: "leg" },
  //     {
  //       date: "3/5/23",
  //       start_time: "6AM",
  //       end_time: "7AM",
  //       exercise: "shoulder",
  //     },
  //   ]
  //   );

  return (
   <main>
    <h1 className="welcome">Welcome, {firstName}!</h1>
    <h3 className="date">{currentTime}</h3>
    <div className="homepageContainer-wrapper ">
      
      <aside className="col-lg-4">
      {/* <div className="col-align-self-center"> */}
        <div className="appointments-container">
          
          <h3 className="card-heading">Today's Appointments</h3>
          {todaysSchedule ? (<AppointmentsCards appointments={todaysSchedule} />) : (<h3>Your Schedule is Clear!</h3>)}
        </div>
      {/* </div> */}
      </aside>


      <aside className="col-lg-4">
        <div className="trainees-container">
         
          <h3 className="card-heading">Clients</h3>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TraineesCards trainees={trainees} />
          )}
        </div>
      </aside>
      
      
      
      <aside className="col-lg-4">
       <div className= "action-container">

        <h3 className="card-heading">Action Center</h3>
        <div className = "cardBtn">
          {/* <div className="links"> */}
           <FullscheduleButtons /></div>
           <div className = "cardBtn">
           <AddTraineeButtons /></div>
           <div className = "cardBtn">
           <ViewallTraineesButtons /></div>
          {/* </div> */}

       </div>

      </aside>
  
    </div>
  </main>
  );
}
