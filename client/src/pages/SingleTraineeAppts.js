import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Button } from 'react-bootstrap';
import { UPDATE_APPOINTMENT } from '../utils/mutations';
import { useMutation } from '@apollo/client';

function SingleTraineeAppts({ traineeAppts }) {
  const [editableAppt, setEditableAppt] = useState(null);
  const [updateAppointment, { error }] = useMutation(UPDATE_APPOINTMENT);

  const handleEdit = (appt) => {
    setEditableAppt(appt);
  };

  const handleSave = async () => {
    try {
      const formattedStart = dayjs(editableAppt.startDate).format('YYYY-MM-DDTHH:mm:ss');
const formattedEnd = dayjs(editableAppt.endDate).format('YYYY-MM-DDTHH:mm:ss');
      const payload = {
        scheduleId: editableAppt._id,
        startDate: formattedStart,
        endDate: formattedEnd,
        location: editableAppt.location,
      };
      console.log('Payload:', payload);
      const { data } = await updateAppointment({
        variables: payload,
      });
      console.log('data', data);
      setEditableAppt(null);
    } catch (e) {
      console.error(e);
    }
  };
  
  
  

  const handleCancel = () => {
    setEditableAppt(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableAppt({
      ...editableAppt,
      [name]: value,
    });
  };

  useEffect(() => {
    if (editableAppt) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [editableAppt]);

  return (
    <div className="overflow-auto scroll">
      {traineeAppts?.length > 0 && (
        <div>
          <h3 className="card-title"></h3>
          {traineeAppts.map((appt) => (
            <div className="clientAppt-card" key={appt._id}>
              {editableAppt?._id === appt._id ? (
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="startDate"
                      name="startDate"
                      value={editableAppt.startDate}
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
                      value={editableAppt.endDate}
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
                      value={editableAppt.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button onClick={handleSave}>Save</Button>
                  <Button onClick={handleCancel}>Cancel</Button>
                  {error && <p className="text-danger">{error.message}</p>}
                </div>
              ) : (
                <div className="card-body" onClick={() => handleEdit(appt)}>
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
                </div>
              )
              }
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
export default SingleTraineeAppts;




