import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function UpdateClientModal(props) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    height: '',
    weight: '',
    goals: '',
    injuryHistory: '',
    notes: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let intValue = value;
  
    if (name === 'weight' || name === 'height') {
      intValue = parseInt(value);
    }
  
    setFormData({
      ...formData,
      [name]: intValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    try {
      //here I think we might need an updateTrainee mutation here for this to update. 
      // const { data } = await updateTrainee({
      //   variables: { ...formData },
      // });
      // You can access the updated user information in the formData object here
      // console.log(data);
      //Reset the form state to clear the input data
      // setFormData({
      //   firstName: '',      
      //   lastName: '',
      //   dob: '',
      //   height: '',
      //   weight: '',
      //   goals: '',
      //   injuryHistory: '',
      //   notes: '',
      // });
    } catch (e) {
      console.error(e);
    }
  };
  
  


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
             <p className=''>Name:
            <input 
            value={formData.firstName}
            name="firstName" 
            onChange={handleInputChange} 
            type="text"
            placeholder="First Name"
            className='inputStyle'
            />
            <input 
            value={formData.lastName} 
            name="lastName" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Last Name"
            className='inputStyle' 
            /> </p>
            <p className=''>DOB:
            <input 
            value={formData.dob}
            name="dob" 
            onChange={handleInputChange} 
            type="Date"
            placeholder="DOB" 
            className='inputStyle'
            /></p>
            <p className=''>Height:
            <input 
            value={formData.height} 
            name="height" 
            onChange={handleInputChange} type="text" 
            placeholder="in" 
            className='inputStyle'
            /></p>
            <p className=''>Weight:
            <input 
            value={formData.weight} 
            name="weight" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="lbs" 
            className='inputStyle'
            /></p>
            <p className=''>Goals:
            <input 
             value={formData.goals} 
            name="goals" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Goals" 
            className='inputStyle'
            /></p>
            <p className=''>Injury History:
            <input 
             value={formData.injuryHistory} 
            name="injuryHistory" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Injury History" 
            className='inputStyle'
            /></p>
            <p className=''>Notes:
            <input 
             value={formData.notes} 
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

