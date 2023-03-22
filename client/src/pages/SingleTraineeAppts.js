import React, { useState } from 'react';
import dayjs from "dayjs";
import { useMutation } from "@apollo/client";
import { REMOVE_APPOINTMENT } from "./../utils/mutations"
import Button from 'react-bootstrap/Button';



function SingleTraineeAppts({ traineeAppts, setApptIndex, apptIndex, trainee }) {
  const [appt, setAppt] = useState();
  const [deleteAppt] = useMutation(REMOVE_APPOINTMENT);
  const { _id } = trainee
  const appointment = traineeAppts[apptIndex];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await deleteAppt({
        variables: { scheduleId: e.target.id, traineeId: _id},
       
      });
     window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (<div className='overflow-auto scroll'>{traineeAppts?.map((appt, i) => (

    <div className="clientAppt-card" key={i}>
      <div className="card-body" id={i} onClick={() => setApptIndex(i)}>
        <h4><b>Date: </b>{dayjs(appt.startDate).format('MM/DD')}</h4>
        <h4><b>Start: </b>{dayjs(appt.startDate).format('h:mm A')}</h4>
        <h4 className="card-text"><b>End: </b>{dayjs(appt.endDate).format('h:mm A')}</h4>
        <h4 className="card-text">
          <b>location:</b> {appt.location}
        </h4>
        <Button className='btn onWhite' id={appt._id} onClick={handleFormSubmit}>
          Delete Appt
        </Button>
      </div>
    </div>

  ))}</div>)
}



export default SingleTraineeAppts;
