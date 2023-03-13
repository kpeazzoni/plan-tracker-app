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

  const schedules = data?.me.trainerSchedule || [];
  const trainees = data?.me.trainees || [];
  const todaysDate=dayjs().format('YYYY-MM-DD');
  const todaysSchedule=schedules.filter(appointment=>appointment.startDate.slice(0, -15) == todaysDate);

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
    <div className="homepageContainer-wrapper">
      <aside className="col-md-5">
        <div className="appointments-container">
        <Link to="/appointmentscard"><FullscheduleButtons /></Link>
        <h3 className="card-heading">Today's Appointments</h3>
        {todaysSchedule ? (<AppointmentsCards appointments={todaysSchedule}/>) : (<h2>Your Schedule is Clear!</h2>)}
        </div>
      </aside>

      <aside className="col-md-2"></aside>

      <aside className="col-md-5">
        <div className="trainees-container">
        <div className="d-flex flex-row mb-3">
          <Link to="/newclientform"><AddTraineeButtons /></Link>
          <Link to="/alltrainees"><ViewallTraineesButtons /></Link>
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
