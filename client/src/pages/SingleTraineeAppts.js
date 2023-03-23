import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, Modal } from 'react-bootstrap';
import { UPDATE_APPOINTMENT } from '../utils/mutations';
import { REMOVE_APPOINTMENT } from './../utils/mutations';
import { useMutation } from '@apollo/client';

function SingleTraineeAppts({ traineeAppts, setApptIndex, apptIndex, trainee, setTraineeAppts }) {
  const [updateAppointment, { error }] = useMutation(UPDATE_APPOINTMENT);
  const [deleteAppt] = useMutation(REMOVE_APPOINTMENT);
  const [showModal, setShowModal] = useState(false);
  const [editedAppt, setEditedAppt] = useState(null);
  const { _id } = trainee;
  const appointment = traineeAppts[apptIndex];

  const handleCloseModal = () => {
    setShowModal(false);
    setEditedAppt(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await deleteAppt({
        variables: { scheduleId: e.target.id, traineeId: _id },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (appt) => {
    setEditedAppt(appt);
    setShowModal(true);
  };

  const handleSave = async (e) => {
    try {
      const formattedStart = dayjs(editedAppt.startDate).format('YYYY-MM-DDTHH:mm:ss');
      const formattedEnd = dayjs(editedAppt.endDate).format('YYYY-MM-DDTHH:mm:ss');
      const payload = {
        scheduleId: editedAppt._id,
        startDate: formattedStart,
        endDate: formattedEnd,
        location: editedAppt.location,
      };
      console.log('Payload:', payload);
      const { data } = await updateAppointment({
        variables: payload,
      });
      console.log('data', data.updateAppointment);
      const apptArray = [...traineeAppts]
      const updatedAppt = apptArray.splice(e.target.id, 1, data.updateAppointment)
      console.log('updated', updatedAppt);
      // setTraineeAppts([...traineeAppts, data.updateAppointment])
      setShowModal(false);
      setEditedAppt(null);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setEditedAppt(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAppt({
      ...editedAppt,
      [name]: value,
    });
  };

  return (
    <div className="overflow-auto scroll">
      {traineeAppts?.length > 0 && (
        <div>
          <h3 className="card-title"></h3>
          {traineeAppts?.map((appt, i) => (
            <div className="clientAppt-card" key={appt._id}>
              <div className="card-body" onClick={() => setApptIndex(i)}>
                <h4>
                  <b>Date: </b>
                  {dayjs(appt.startDate).format('MM/DD')}
                </h4>
                <h4>
                  <b>Start: </b>
                  {dayjs(appt.startDate).format('h:mm A')}
                </h4>
                <h4 className="card-text">
                  <b>End: </b>
                  {dayjs(appt.endDate).format('h:mm A')}
                </h4>
                <h4 className="card-text">
                  <b>Location: </b>
                  {appt.location}
                </h4>
                <Button className='btn onWhite' id={appt._id} onClick={() => handleEdit(appt)}>
                  Edit Appt
                </Button>
                <Button className='btn onWhite' id={appt._id} onClick={handleFormSubmit}>
                  Delete Appt
                </Button>
              </div>
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {editedAppt && (
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="startDate">Start Date:</label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            id="startDate"
                            name="startDate"
                            value={editedAppt.startDate}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="endDate">End Date:</label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            id="endDate"
                            name="endDate"
                            value={editedAppt.endDate}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="location">Location:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="location"
                            value={editedAppt.location}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p className="text-danger">{error.message}</p>}
                      </form>
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                  <Button variant="primary" id={i}  onClick={handleSave}>
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SingleTraineeAppts;



