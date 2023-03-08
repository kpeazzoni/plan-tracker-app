import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditWorkoutPlanModal(props) {
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
      // const muscleGroup = ""      
      // const exerciseName = ""
      // const sets = ""
      // const reps =""
      // const weight = ""
      // const distance = ""
      // const equipmentReq = ""
      // const notes = ""
    return (
    <>
    <Button variant="primary" onClick={handleShow}>
      EditWorkoutPlanModal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Workout Plan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className = 'container col-8'>
         <form className="row justify-content-center" >
         <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Muscle Group
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="">Action</a></li>
            <li><a className="dropdown-item" href="">Another action</a></li>
            <li><a className="dropdown-item" href="">Something else here</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exercise
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="">Action</a></li>
            <li><a className="dropdown-item" href="">Another action</a></li>
            <li><a className="dropdown-item" href="">Something else here</a></li>
          </ul>
        </div>
            <p className=''>Sets:
            <input 
            // value={sets} 
            name="sets" 
            onChange={handleInputChange} 
            type="number"
            placeholder="Sets" 
            className='inputStyle'
            /></p>
            <p className=''>Reps:
            <input 
            // value={reps} 
            name="reps" 
            onChange={handleInputChange} type="number" 
            placeholder="reps" 
            className='inputStyle'
            /></p>
            <p className=''>Weight:
            <input 
            // value={weight} 
            name="weight" 
            onChange={handleInputChange} 
            type="Number" 
            placeholder="lbs" 
            className='inputStyle'
            /></p>
            <p className=''>Distance:
            <input 
            // value={distance} 
            name="distance" 
            onChange={handleInputChange} 
            type="number" 
            placeholder="Distance" 
            className='inputStyle'
            /></p>
            <p className=''>Equipment Required:
            <input 
            // value={equipmentReq} 
            name="equipmentReq" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Equipment Required" 
            className='inputStyle'
            /></p>
            <p className=''>Notes:
            <input 
            // value={notes} 
            name="notes" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Notes: (instructions, focal points, exceptions, etc.)" 
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
          Add Exercise
        </Button>
      </Modal.Footer>
    </Modal>
  </>
      );
    }

    export default EditWorkoutPlanModal;

