import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ADD_DEMOGRAPHICS } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
// import Auth from '../../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_TRAINEE } from '../../utils/queries';

function UpdateTraineeModal({ trainee }) {
  // console.log(props);
  // const [trainee, setTrainee] = useState();

  const [formState, setFormState] = useState({
    goals: '',
    height: '',
    injuryHistory: '',
    notes: '',
    weight: '',
  });
  const { _id } = trainee
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    console.log(_id)

    try {
      const { data } = await addDemographics({
        variables: { traineeId: _id, ...formState },
      });

      console.log(data);
      // Reset the form state to clear the input data
      setFormState({
        goals: '',
        height: '',
        injuryHistory: '',
        notes: '',
        weight: '',
      });
      setShow(false); // Close the modal after form submission
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button className="btn onWhite" onClick={handleShow}>
        Update Client
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container col-12'>
            <form className="row formCard" >
              {/* <div className="mb-3"> */}
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">Height</span>
                <input onChange={handleChange}
                  placeholder="in"
                  type="text"
                  className="form-control"
                  name="height"
                />
              </div>
              {/* </div> */}
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">Weight</span>
                <input onChange={handleChange}
                  placeholder="lbs"
                  type="text"
                  className="form-control"
                  name="weight"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text" >Goals</span>
                <textarea onChange={handleChange}
                  placeholder=""
                  type="text"
                  className="form-control"
                  name="goals"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">Injury History</span>
                <textarea onChange={handleChange}
                  placeholder=""
                  type="text"
                  className="form-control"
                  name="injuryHistory"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">Notes</span>
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

export default UpdateTraineeModal;
