import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function UpdateClientModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = e.target;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  // const firstName = ""      
  // const lastName = ""
  // const dob = ""
  // const height =""
  // const weight = ""
  // const goals = ""
  // const injuryHistory = ""
  // const notes = ""
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        UpdateClientModal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container col-12'>
            <form className="row formCard" >
              {/* <div class="mb-3"> */}
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Height</span>
                <input onChange={handleInputChange}
                  placeholder="in"
                  type="text"
                  className="form-control"
                  name="height"
                />
              </div>
              {/* </div> */}
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Weight</span>
                <input onChange={handleInputChange}
                  placeholder="lbs"
                  type="text"
                  className="form-control"
                  name="weight"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" >Goals</span>
                <textarea onChange={handleInputChange}
                  placeholder=""
                  type="text"
                  className="form-control"
                  name="goals"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Injury History</span>
                <textarea onChange={handleInputChange}
                  placeholder=""
                  type="text"
                  className="form-control"
                  name="injuryHistory"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon3">Notes</span>
                <textarea onChange={handleInputChange}
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

export default UpdateClientModal;

