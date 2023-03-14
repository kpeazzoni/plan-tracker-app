import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ADD_APPOINTMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';


function ScheduleAppointmentModal(props) {
  const [formState, setFormState] = useState({
    
    startDate: '',
    endDate: '',
    location: '',
  });

  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('name', name, 'value', value)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDateFormat = () => {
    const formattedTimeStampStart = `${formState}T${formState.startDate}:00`;
    const formattedTimeStampEnd = `${formState}T${formState.endDate}:00`;
  
    const formattedStartDateTime = (formattedTimeStampStart, "isoDateTime");
    const formattedEndDateTime = (formattedTimeStampEnd, "isoDateTime");
  
    return { 
      startDate: formattedStartDateTime, 
      endDate: formattedEndDateTime 
    };
  };
  
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      const { startDate, endDate } = handleDateFormat(); // destructure start and end date
      const { data } = await addAppointment({
        variables: { 
          ...formState,
          startDate, // use destructured values directly
          endDate
        },
      });
  
      console.log('data', data);
      // Reset the form state to clear the input data
      setFormState({
        startDate: '',
        endDate: '',
        location: '',
      });
    } catch (e) {
      console.error(e);
    }
  };
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ScheduleAppointmentModal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container col-8'>
            <form className="row justify-content-center formCard" >
              <p className=''>Date:
                <input
                  value={formState.date}
                  name="Date"
                  onChange={handleInputChange}
                  type="Date"
                  placeholder="Date"
                  className='inputStyle'
                /></p>
         
              <p className=''>Start Time:
                <select className="form-control" onChange={handleInputChange} name ="startDate" id="exampleFormControlSelect1">
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
                </select>
              </p>
              <p className=''>End Time:
                <select className="form-control" onChange={handleInputChange} name ="endDate" id="exampleFormControlSelect1">
                  <option value={`05:30:00`}>5:00am</option>
                  <option value={`05:30:00`}>5:30am</option>
                  <option value={`06:00:00`}>6:00am</option>
                  <option value={`06:30:00`}>6:30am</option>
                  <option value={`07:30:00`}>7:00am</option>
                  <option value={`07:30:00`}>7:30am</option>
                  <option value={`08:30:00`}>8:00am</option>
                  <option value={`08:30:00`}>8:30am</option>
                  <option value={`09:30:00`}>9:00am</option>
                  <option value={`09:30:00`}>9:30am</option>
                  <option value={`10:30:00`}>10:00am</option>
                  <option value={`10:30:00`}>10:30am</option>
                </select>
              </p>
              <p className=''>Location:
                <input
                  // value={location} 
                  name="location"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Location"
                  className='inputStyle'
                /></p>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScheduleAppointmentModal;

