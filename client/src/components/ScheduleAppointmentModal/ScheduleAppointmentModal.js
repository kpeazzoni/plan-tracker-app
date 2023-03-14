import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ScheduleAppointmentModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
      };
      // date: '',
      // startTime: '',
      // endTime: '',
      // location: '',
      
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
      <div className = 'container col-8'>
         <form className="row justify-content-center formCard" >
         <p className=''>Date:
            <input 
            // value={Date} 
            name="Date" 
            onChange={handleInputChange} 
            type="Date"
            placeholder="Date" 
            className='inputStyle'
            /></p>
            <p className=''> Start Time:
            <input 
            // value={startTime} 
            name="startTime" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Start Time"
            className='inputStyle' 
            /> </p>
            <p className=''>End Time::
            <input 
            // value={endTime} 
            name="endTime" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="End Time" 
            className='inputStyle'
            /></p>
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

