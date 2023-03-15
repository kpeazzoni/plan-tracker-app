import React from 'react';

function SingleTraineeAppts({traineeAppts, setApptIndex}) {
  console.log(traineeAppts);
  
    return (<div className ='overflow-auto scroll'>{traineeAppts?.map((appt, i) => (
      
      <div className="clientAppt-card" key={i}>
          <div className="card-body"id={i} onClick={()=> setApptIndex(i)}>
            <h4><b>Start:</b>{appt.startDate}</h4>
            <h4 className="card-text"><b>End:</b>{appt.endDate}</h4>
            <h4 className="card-text">
              <b>location:</b> {appt.location}
            </h4>
          </div>
      </div>
    ))} </div>)
};

export default SingleTraineeAppts;