import React from 'react';

function SingleTraineeAppts({trainee, setApptIndex}) {
  console.log(trainee)
    return <>{trainee?.traineeSchedule?.map((appt, i) => (
      <div class="card allappts-per" key={i}>
        <button type="button" class="d-grid gap-2" id={i} onClick={()=> setApptIndex(i)}>
          <div className="card-body">
            <h5>{appt.startDate}</h5>
            <p class="card-text">{appt.endDate}</p>
            <p class="card-text">
              <b>location:</b> {appt.location}
            </p>
          </div>
        </button>
      </div>
    ))}
    </>
};

export default SingleTraineeAppts;