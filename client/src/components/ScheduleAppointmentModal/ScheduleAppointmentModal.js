import React, { useState } from 'react';
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
      <Button className = 'btn onWhite' onClick={handleShow}>
        Schedule Appointment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container col-8'>
            <form className="row justify-content-center formCard" >
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Date</span>
                <input
                  name="date"
                  onChange={handleInputChange}
                  type="Date"
                  placeholder="Date"
                  className="form-control" />
              </div>
              <div class="input-group">
                <span class="input-group-text">Time</span>
                <select
                  name="startTime"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Start"
                  className="form-control"
                >
                  <option>5:00am</option>
                  <option>5:30am</option>
                  <option>6:00am</option>
                  <option>6:30am</option>
                  <option>7:00am</option>
                  <option>7:30am</option>
                  <option>8:00am</option>
                  <option>8:30am</option>
                  <option>9:00am</option>
                  <option>9:30am</option>
                  <option>10:00am</option>
                  <option>10:30am</option>
                  <option>11:00am</option>
                  <option>11:30am</option>
                  <option>12:00pm</option>
                  <option>12:30pm</option>
                  <option>1:00pm</option>
                  <option>1:30pm</option>
                  <option>2:00pm</option>
                  <option>2:30pm</option>
                  <option>3:00pm</option>
                  <option>3:30pm</option>
                  <option>4:00pm</option>
                  <option>4:30pm</option>
                  <option>5:00pm</option>
                  <option>5:30pm</option>
                  <option>6:00pm</option>
                  <option>6:30pm</option>
                  <option>7:00pm</option>
                  <option>7:30pm</option>
                  <option>8:00pm</option>
                  <option>8:30pm</option>
                  <option>9:00pm</option>
                  <option>9:30pm</option>
                </select>
                <select
                  name="EndTime"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="End"
                  className="form-control"
                >
                  <option>5:00am</option>
                  <option>5:30am</option>
                  <option>6:00am</option>
                  <option>6:30am</option>
                  <option>7:00am</option>
                  <option>7:30am</option>
                  <option>8:00am</option>
                  <option>8:30am</option>
                  <option>9:00am</option>
                  <option>9:30am</option>
                  <option>10:00am</option>
                  <option>10:30am</option>
                  <option>11:00am</option>
                  <option>11:30am</option>
                  <option>12:00pm</option>
                  <option>12:30pm</option>
                  <option>1:00pm</option>
                  <option>1:30pm</option>
                  <option>2:00pm</option>
                  <option>2:30pm</option>
                  <option>3:00pm</option>
                  <option>3:30pm</option>
                  <option>4:00pm</option>
                  <option>4:30pm</option>
                  <option>5:00pm</option>
                  <option>5:30pm</option>
                  <option>6:00pm</option>
                  <option>6:30pm</option>
                  <option>7:00pm</option>
                  <option>7:30pm</option>
                  <option>8:00pm</option>
                  <option>8:30pm</option>
                  <option>9:00pm</option>
                  <option>9:30pm</option>
                </select>
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Location</span>
                <input
                  name="location"
                  onChange={handleInputChange}
                  type="text"
                  className="form-control" />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className= "btn onWhite" onClick={handleClose}>
            Close
          </Button>
          <Button className = "btn onWhite" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScheduleAppointmentModal;

