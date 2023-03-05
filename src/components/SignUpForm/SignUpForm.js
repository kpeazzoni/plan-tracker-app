import React, { useState } from 'react';

function SignUpForm(props) {
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        // const { } = e.target;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
      };

const lastName = ""
const username = ""
const password = ""

const styles = {
    sectionStyles: {
      background: 'orange',
    },
  };

return (
    <div>
      <form className="row justify-content-center" onSubmit={handleFormSubmit}>
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
            <p>Username:
            <input 
            value={username} 
            name="username" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Username" 
            /></p>
            <p>Password:
            <input 
            value={password} 
            name="password" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Password" 
            /></p>
            <button type="button" onClick={handleFormSubmit}>
                Submit
            </button>
        </form>
    </div>

  );
}

export default SignUpForm;