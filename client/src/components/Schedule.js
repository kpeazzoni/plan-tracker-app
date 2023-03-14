import React, { useState, useEffect } from 'react';
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import 'devextreme/dist/css/dx.light.css';
import { Scheduler } from 'devextreme-react/scheduler';



function Schedule() {
//   const appointments = [
//     {
//         text: 'Website Re-Design Plan',
//         startDate: new Date('2021-03-29T16:30:00.000Z'),
//         endDate: new Date('2021-03-29T18:30:00.000Z'),
//       }, {
//         text: 'Book Flights to San Fran for Sales Trip',
//         startDate: new Date('2021-03-29T19:00:00.000Z'),
//         endDate: new Date('2021-03-29T20:00:00.000Z'),
//         allDay: true,
//       }, {
//         text: 'Install New Router in Dev Room',
//         startDate: new Date('2021-03-29T21:30:00.000Z'),
//         endDate: new Date('2021-03-29T22:30:00.000Z'),
//       }, {
//         text: 'Approve Personal Computer Upgrade Plan',
//         startDate: new Date('2021-03-30T17:00:00.000Z'),
//         endDate: new Date('2021-03-30T18:00:00.000Z'),
//       }
// ];
// console.log(appointments[0].startDate)
// const currentDate = new Date(2021, 2, 28);
// console.log(currentDate)

const [schedules, setSchedules] = useState([]);


const { data, error } = useQuery(QUERY_ME);
useEffect(() => {
    setSchedules(data?.me.trainerSchedule)
}, [data]);

console.log(schedules)

const state = {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,}


const currentDate = Date.now();
const views = ['week', 'month'];
const state = {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,}

    return (
        <>
        <Scheduler
        timeZone={state.timeZone}
        dataSource={schedules}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={700}
        startDayHour={13} />
        </>
    );
}
 
export default Schedule;