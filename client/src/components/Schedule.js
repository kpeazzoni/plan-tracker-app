import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import 'devextreme/dist/css/dx.light.css';
import { Scheduler } from 'devextreme-react/scheduler';



function Schedule() {
const navigate = useNavigate();
const [schedules, setSchedules] = useState([]);

const { data, error } = useQuery(QUERY_ME);
useEffect(() => {
    setSchedules(data?.me.trainerSchedule)
}, [data]);

console.log(schedules);

function onAppointmentClick(e) {
    if(e.appointmentData) {
        navigate(`/singleTraineeContainer/${e.appointmentData.traineeId._id}`);
    }
}

const currentDate = Date.now();
const views = ['week', 'month'];
const state = {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,}
const editingState = {
    allowAdding: false,
    allowDeleting: false,
    allowResizing: false,
    allowDragging: false,
    allowUpdating: false,
}


    return (
        <>
        <Scheduler
        timeZone={state.timeZone}
        dataSource={schedules}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={800}
        startDayHour={5}
        editing={editingState}
        onAppointmentClick={onAppointmentClick} />
        </>
    );
}
 
export default Schedule;