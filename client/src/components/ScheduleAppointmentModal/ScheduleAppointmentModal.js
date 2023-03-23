import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ADD_APPOINTMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

function ScheduleAppointmentModal({ trainee, traineeAppts, setTraineeAppts, refetch }) {
  const [formState, setFormState] = useState({
    startDate: '',
    endDate: '',
    location: '',
  });

  const [dayState, setDayState] = useState('');

  const [formattedTimestamps, setFormattedTimestamps] = useState({
    start: '',
    end: '',
  });

  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'dayState') {
      setDayState(value);
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    const { startDate, endDate } = formState;
    if (startDate && endDate && dayState) {
      const formattedStart = `${dayState}T${startDate}`;
      const formattedEnd = `${dayState}T${endDate}`;
      setFormattedTimestamps({
        start: formattedStart,
        end: formattedEnd,
      });
    }
  }, [formState, dayState]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addAppointment(
        {
        variables: {
          ...formState,
          startDate: formattedTimestamps.start,
          endDate: formattedTimestamps.end,
          traineeId: trainee._id
        },
      });
      console.log('data', data);

      refetch();
      setFormState({
        startDate: '',
        endDate: '',
        location: '',
      });
      setDayState('');
      setFormattedTimestamps({
        start: '',
        end: '',
      });
      setShow(false); // Close the modal after form submission
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button className= "btn onWhite" variant="primary" onClick={handleShow}>
        Schedule Appointment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container col-12'>
            <form className="row justify-content-center formCard" >
              <div className='input-group'>
                <span className='input-group-text' id-='basic-addon3'>Date</span>
                <input
                  value={dayState}
                  name="dayState"
                  onChange={handleInputChange}
                  type="Date"
                  placeholder="Date"
                  className='form-control'
                /></div>
                <div className='input-group'>
                  <span className="input-group-text">Time</span>
                <select 
                className="form-control" 
                onChange={handleInputChange} 
                name="startDate" 
                id="exampleFormControlSelect1">
                  <option value={`05:00:00`}>5:00am</option>
                  <option value={`05:30:00`}>5:30am</option>
                  <option value={`06:00:00`}>6:00am</option>
                  <option value={`06:30:00`}>6:30am</option>
                  <option value={`07:00:00`}>7:00am</option>
                  <option value={`07:30:00`}>7:30am</option>
                  <option value={`08:30:00`}>8:00am</option>
                  <option value={`08:30:00`}>8:30am</option>
                  <option value={`08:30:00`}>9:00am</option>
                  <option value={`09:30:00`}>9:30am</option>
                  <option value={`10:00:00`}>10:00am</option>
                  <option value={`10:30:00`}>10:30am</option>
                  <option value={`11:00:00`}>11:00am</option>
                  <option value={`11:30:00`}>11:30am</option>
                  <option value={`12:00:00`}>12:00pm</option>
                  <option value={`12:30:00`}>12:30pm</option>
                  <option value={`01:00:00`}>1:00pm</option>
                  <option value={`01:30:00`}>1:30pm</option>
                  <option value={`02:00:00`}>2:00pm</option>
                  <option value={`02:30:00`}>2:30pm</option>
                  <option value={`03:00:00`}>3:00pm</option>
                  <option value={`03:30:00`}>3:30pm</option>
                  <option value={`04:00:00`}>4:00pm</option>
                  <option value={`04:30:00`}>4:30pm</option>
                  <option value={`05:00:00`}>5:00pm</option>
                  <option value={`05:30:00`}>5:30pm</option>
                  <option value={`06:00:00`}>6:00pm</option>
                  <option value={`06:30:00`}>6:30pm</option>
                  <option value={`07:00:00`}>7:00pm</option>
                  <option value={`07:30:00`}>7:30pm</option>
                  <option value={`08:00:00`}>8:00pm</option>
                  <option value={`08:30:00`}>8:30pm</option>
                  <option value={`09:00:00`}>9:00pm</option>
                </select>

                <select className="form-control" onChange={handleInputChange} name="endDate" id="exampleFormControlSelect1">
                <option value={`05:00:00`}>5:00am</option>
                  <option value={`05:30:00`}>5:30am</option>
                  <option value={`06:00:00`}>6:00am</option>
                  <option value={`06:30:00`}>6:30am</option>
                  <option value={`07:00:00`}>7:00am</option>
                  <option value={`07:30:00`}>7:30am</option>
                  <option value={`08:30:00`}>8:00am</option>
                  <option value={`08:30:00`}>8:30am</option>
                  <option value={`08:30:00`}>9:00am</option>
                  <option value={`09:30:00`}>9:30am</option>
                  <option value={`10:00:00`}>10:00am</option>
                  <option value={`10:30:00`}>10:30am</option>
                  <option value={`11:00:00`}>11:00am</option>
                  <option value={`11:30:00`}>11:30am</option>
                  <option value={`12:00:00`}>12:00pm</option>
                  <option value={`12:30:00`}>12:30pm</option>
                  <option value={`01:00:00`}>1:00pm</option>
                  <option value={`01:30:00`}>1:30pm</option>
                  <option value={`02:00:00`}>2:00pm</option>
                  <option value={`02:30:00`}>2:30pm</option>
                  <option value={`03:00:00`}>3:00pm</option>
                  <option value={`03:30:00`}>3:30pm</option>
                  <option value={`04:00:00`}>4:00pm</option>
                  <option value={`04:30:00`}>4:30pm</option>
                  <option value={`05:00:00`}>5:00pm</option>
                  <option value={`05:30:00`}>5:30pm</option>
                  <option value={`06:00:00`}>6:00pm</option>
                  <option value={`06:30:00`}>6:30pm</option>
                  <option value={`07:00:00`}>7:00pm</option>
                  <option value={`07:30:00`}>7:30pm</option>
                  <option value={`08:00:00`}>8:00pm</option>
                  <option value={`08:30:00`}>8:30pm</option>
                  <option value={`09:00:00`}>9:00pm</option>
                </select>
              </div>
              <div className='input-group'>
                <span className="input-group-text">Location</span>
                <input
                  value={formState.location} 
                  name="location"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Location"
                  className='form-control'
                /></div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn onWhite" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn onWhite" variant="primary" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScheduleAppointmentModal;
