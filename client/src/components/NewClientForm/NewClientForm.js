import React, { } from 'react';
import './NewClientForm.css';

function NewClientForm(props) {
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        // const { name, value } = e.target;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
      };


const firstName = ""      
const lastName = ""
const dob = ""
const height =""
const weight = ""
const goals = ""
const injuryHistory = ""
const notes = ""

return (
<div className='formPlacement'>
    <p className='pStyle'>
        Add new client information:
    </p>
    <div className = 'container col-8'>
        <form className="row justify-content-center formCard" >
            <p className='pStyle'>Name:
            <input 
            value= {firstName}
            name="firstName" 
            onChange={handleInputChange} 
            type="text"
            placeholder="First Name"
            className='inputStyle'
            />
            <input 
            value={lastName} 
            name="lastName" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Last Name"
            className='inputStyle' 
            /> </p>
            <p className='pStyle'>DOB:
            <input 
            value={dob} 
            name="dob" 
            onChange={handleInputChange} 
            type="Date"
            placeholder="DOB" 
            className='inputStyle'
            /></p>
            <p className='pStyle'>Height:
            <input value={height} name="height" 
            onChange={handleInputChange} type="text" 
            placeholder="in" 
            className='inputStyle'
            /></p>
            <p className='pStyle'>Weight:
            <input 
            value={weight} 
            name="weight" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="lbs" 
            className='inputStyle'
            /></p>
            <p className='pStyle'>Goals:
            <input 
            value={goals} 
            name="goals" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Goals" 
            className='inputStyle'
            /></p>
            <p className='pStyle'>Injury History:
            <input 
            value={injuryHistory} 
            name="injuryHistory" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Injury History" 
            className='inputStyle'
            /></p>
            <p className='pStyle'>Notes:
            <input 
            value={notes} 
            name="notes" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Notes: (lifestyle, fun facts, etc.)" 
            className='inputStyle'
            /></p>
            <button type="button" onClick={handleFormSubmit} className='buttonStyle'>
                Submit
            </button>
        </form>
    </div>
</div>
  );
}

export default NewClientForm;