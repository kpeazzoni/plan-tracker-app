import React, { useState, useEffect } from "react";
import { QUERY_SCHEDULES, QUERY_TRAINEES } from "../../utils/queries";
import { Navigate } from 'react-router-dom';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

import { useQuery } from "@apollo/client";

import AppointmentsCards from "../../pages/AppointmentsCards";
import TraineesCards from "../../pages/TraineesCards";
import "./HomepageContainer.css";
import FullscheduleButtons from "../Buttons/fullschedulebuttons";
import AddclientButtons from "../Buttons/addclientbuttons";
import ViewallclientsButtons from "../Buttons/viewallclientsbuttons";

export default function HomepageContainer() {
    const { loading, data } = useQuery(QUERY_SCHEDULES, {
        variables: { 
            trainerId: localStorage.getItem('schedules_id'),
            trainerId: localStorage.getItem("trainer_id") 
        },
        onCompleted: (data) => {
            console.log(data);
        },
    });
    
  const schedules = data?.schedules || [];
  const trainees = data?.trainees || [];


  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
//   if (Auth.loggedIn().data.login.user._id === user._id) {
//     return <Navigate to="/me" />;
//   }

//   const trainees = data?.trainees || data?.schedules || {};
//   console.log(data);
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
    <div className="homepageContainer-wrapper">
      <aside className="col-md-5">
        <div className="appointments-container">
          <FullscheduleButtons />
          <h3 className="card-heading">Today's Appointment</h3>
          <AppointmentsCards schedules={schedules} />
        </div>
      </aside>

      <aside className="col-md-2"></aside>

      <aside className="col-md-5">
        <div className="trainees-container">
          <div class="d-flex flex-row mb-3">
            <AddclientButtons /> <ViewallclientsButtons />
          </div>
          <h3 className="card-heading">Trainees</h3>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TraineesCards trainees={trainees} />
          )}
        </div>
      </aside>
    </div>
  );
}
