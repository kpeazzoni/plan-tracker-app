import React, {useState} from 'react';
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
      <div className = 'container col-8'>
         <form className="row justify-content-center formCard" >
            <p className=''>Height:
            <input 
            // value={height} 
            name="height" 
            onChange={handleInputChange} type="text" 
            placeholder="in" 
            className='inputStyle'
            /></p>
            <p className=''>Weight:
            <input 
            // value={weight} 
            name="weight" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="lbs" 
            className='inputStyle'
            /></p>
            <p className=''>Goals:
            <input 
            // value={goals} 
            name="goals" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Goals" 
            className='inputStyle'
            /></p>
            <p className=''>Injury History:
            <input 
            // value={injuryHistory} 
            name="injuryHistory" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Injury History" 
            className='inputStyle'
            /></p>
            <p className=''>Notes:
            <input 
            // value={notes} 
            name="notes" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Notes: (lifestyle, fun facts, etc.)" 
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

    export default UpdateClientModal;

