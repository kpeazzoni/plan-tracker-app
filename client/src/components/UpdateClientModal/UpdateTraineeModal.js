import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ADD_DEMOGRAPHICS } from '../../utils/mutations';
import {useMutation} from '@apollo/client'
import Auth from '../../utils/auth'


function UpdateTraineeModal(props) {
  const [formState, setFormState] = useState({
    firstName: '',      
    lastName: '',
    dob: '',
    height: '',
    weight: '',
    goals: '',
    injuryHistory: '',
    notes: '',
  });
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   // const { name, value } = e.target;
  // }
  const [addDemographics] = useMutation(ADD_DEMOGRAPHICS)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    let intValue = value;
  
    if (name === 'weight' || name === 'height') {
      intValue = parseInt(value);
    }
  
    setFormState({
      ...formState,
      [name]: intValue,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addDemographics({
        variables: { ...formState },
      });

      console.log(data);
    // Reset the form state to clear the input data
    setFormState({
      firstName: '',      
      lastName: '',
      dob: '',
      height: '',
      weight: '',
      goals: '',
      injuryHistory: '',
      notes: '',
    });

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Trainee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Trainee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container col-12'>
            <form className="row formCard" >
              {/* <div class="mb-3"> */}
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Height</span>
                <input onChange={handleChange}
                  placeholder="in"
                  type="text"
                  className="form-control"
                  name="height"
                />
              </div>
              {/* </div> */}
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Weight</span>
                <input onChange={handleChange}
                  placeholder="lbs"
                  type="text"
                  className="form-control"
                  name="weight"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" >Goals</span>
                <textarea onChange={handleChange}
                  placeholder=""
                  type="text"
                  className="form-control"
                  name="goals"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Injury History</span>
                <textarea onChange={handleChange}
                  placeholder=""
                  type="text"
                  className="form-control"
                  name="injuryHistory"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Notes</span>
                <textarea onChange={handleChange}
                  placeholder=""
                  type="text"
                  className="form-control"
                  name="notes"
                />
              </div>
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

export default UpdateTraineeModal;

