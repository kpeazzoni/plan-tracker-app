import React, { useState } from 'react';

function NewClientForm(props) {
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      };

return (
<div>
    <p>
        Add new client information:
    </p>
    <div className = 'container col-4'>
        <form className="row justify-content-center">
            <p>Name:
            <input 
            value="{firstName}"
            name="firstName" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Last Name" 
            />
            <input 
            value={lastName} 
            name="lastName" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Last Name" 
            /> </p>
            <p>DOB:
            <input 
            value={dob} 
            name="dob" 
            onChange={handleInputChange} 
            type="Date"
            placeholder="DOB" 
            /></p>
            <p>Height
            <input value={height} name="height" 
            onChange={handleInputChange} type="text" 
            placeholder="in" 
            /></p>
            <p>Weight:
            <input 
            value={weight} 
            name="weight" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="lbs" 
            /></p>
            <p>Goals:
            <input 
            value={goals} 
            name="goals" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Goals" 
            /></p>
            <p>Notes:
            <input 
            value={notes} 
            name="notes" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Notes: (injury history, lifestyle, fun facts, etc.)" 
            /></p>
            <button type="button" onClick={handleFormSubmit}>
                Submit
            </button>
        </form>
    </div>
</div>
  );
}

export default NewClientForm;