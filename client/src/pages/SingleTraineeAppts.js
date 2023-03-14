import React from 'react';

function SingleTraineeAppts({traineeAppts, setApptIndex}) {
  console.log(traineeAppts);
    return (<>{traineeAppts?.map((appt, i) => (
      <div className="card allappts-per" key={i}>
        <button type="button" className="d-grid gap-2" id={i} onClick={()=> setApptIndex(i)}>
          <div className="card-body">
            <h5>{appt.startDate}</h5>
            <p className="card-text">{appt.endDate}</p>
            <p className="card-text">
              <b>location:</b> {appt.location}
            </p>
          </div>
        </button>
      </div>
    ))}
    </>)
};

export default SingleTraineeAppts;