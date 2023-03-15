import React from 'react';

function SingleTraineeAppts({traineeAppts, setApptIndex}) {
  console.log(traineeAppts);
    return (<>{traineeAppts?.map((appt, i) => (
      <div className="clientAppt-card" key={i}>
        {/* <button type="button" className="d-grid gap-2" id={i} onClick={()=> setApptIndex(i)}> */}
          <div className="card-body"id={i} onClick={()=> setApptIndex(i)}>
            <h4><b>Start:</b>{appt.startDate}</h4>
            <h4 className="card-text"><b>End:</b>{appt.endDate}</h4>
            <h3 className="card-text">
              <b>location:</b> {appt.location}
            </h3>
          </div>
        {/* </button> */}
      </div>
    ))}
    </>)
};

export default SingleTraineeAppts;