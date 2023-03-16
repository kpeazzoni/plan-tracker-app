import React from 'react';
import dayjs from "dayjs";

function SingleTraineeAppts({traineeAppts, setApptIndex}) {
  // const apptDay = dayjs(traineeAppts[].startDate).format('MM/DD/YYYY');
  // const timeStart = dayjs(appt.startDate).format('hh:mm A');
  // const timeEnd = dayjs(appt.startDate).format('MM/DD/YYYY');
  
    return (<div className ='overflow-auto scroll'>{traineeAppts?.map((appt, i) => (
      
      <div className="clientAppt-card" key={i}>
          <div className="card-body"id={i} onClick={()=> setApptIndex(i)}>
            <h4><b>Date: </b>{dayjs(appt.startDate).format('MM/DD')}</h4>
            <h4><b>Start: </b>{dayjs(appt.startDate).format('h:mm A')}</h4>
            <h4 className="card-text"><b>End: </b>{dayjs(appt.endDate).format('h:mm A')}</h4>
            <h4 className="card-text">
              <b>location:</b> {appt.location}
            </h4>
          </div>
      </div>
    ))} </div>)
};

export default SingleTraineeAppts;