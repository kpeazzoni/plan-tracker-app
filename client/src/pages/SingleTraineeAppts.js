import React, { useState } from 'react';
import dayjs from "dayjs";
import { useMutation } from "@apollo/client";
import { REMOVE_APPOINTMENT } from "./../utils/mutations"
import Button from 'react-bootstrap/Button';



function SingleTraineeAppts({ traineeAppts, setApptIndex, trainee }) {
  const [appt, setAppt] = useState();
  // const [formState, setFormState] = useState({
  //   scheduleId: '',
  // });
  const [deleteAppt] = useMutation(REMOVE_APPOINTMENT);
  const { _id } = trainee
  const appointment = traineeAppts[0]
  console.log("appointment", traineeAppts[0])

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("appointment.id", appointment._id)
    try {
      const { data, error } = await deleteAppt({
        variables: { scheduleId: appointment._id, traineeId: _id},
       
      });
     
    } catch (err) {
      console.error(err);
    }
  }
  // const apptDay = dayjs(traineeAppts[].startDate).format('MM/DD/YYYY');
  // const timeStart = dayjs(appt.startDate).format('hh:mm A');
  // const timeEnd = dayjs(appt.startDate).format('MM/DD/YYYY');

  return (<div className='overflow-auto scroll'>{traineeAppts?.map((appt, i) => (

    <div className="clientAppt-card" key={i}>
      <div className="card-body" id={i} onClick={() => setApptIndex(i)}>
        <h4><b>Date: </b>{dayjs(appt.startDate).format('MM/DD')}</h4>
        <h4><b>Start: </b>{dayjs(appt.startDate).format('h:mm A')}</h4>
        <h4 className="card-text"><b>End: </b>{dayjs(appt.endDate).format('h:mm A')}</h4>
        <h4 className="card-text">
          <b>location:</b> {appt.location}
        </h4>
        <Button className='btn onWhite' onClick={handleFormSubmit}>
          Delete Appoitment
        </Button>
      </div>
    </div>

  ))}</div>)
}



export default SingleTraineeAppts;

// import React from 'react';
// import DeleteButton from './DeleteButton';

// const Appointment = ({ appointment, onDelete }) => {
//   const handleDelete = () => {
//     onDelete(appointment.id);
//   };

//   return (
//     <div>
//       <h2>{appointment.title}</h2>
//       <p>{appointment.description}</p>
//       <DeleteButton onClick={handleDelete} />
//     </div>
//   );
// };

// export default Appointment;
