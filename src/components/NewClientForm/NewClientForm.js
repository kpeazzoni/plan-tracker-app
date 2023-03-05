import React, { } from 'react';

function NewClientForm(props) {
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        // const { name, value } = e.target;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
      };
const styles = {
    formPlacement: {
        margin: 'auto'
        },
    formCard: {
        border: "solid",
        borderColor: "white",
        padding: "1rem",
        borderRadius: "1rem",
    },
    pStyle: {
        lineHeight: "2rem",
        color: "white",
        fontSize: "1.5rem"
    },
    inputStyle: {
        margin: "5px",
        height: "2rem"
    },
    buttonStyle: {
        background: "#6CB4AC",
        height: "2rem",
        borderRadius: ".5rem"
    }
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
<div style={styles.formPlacement}>
    <p style={styles.pStyle}>
        Add new client information:
    </p>
    <div className = 'container col-4'>
        <form className="row justify-content-center" style ={styles.formCard}>
            <p style ={styles.pStyle}>Name:
            <input 
            value= {firstName}
            name="firstName" 
            onChange={handleInputChange} 
            type="text"
            placeholder="First Name"
            style ={styles.inputStyle}
            />
            <input 
            value={lastName} 
            name="lastName" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Last Name"
            style ={styles.inputStyle} 
            /> </p>
            <p style ={styles.pStyle}>DOB:
            <input 
            value={dob} 
            name="dob" 
            onChange={handleInputChange} 
            type="Date"
            placeholder="DOB" 
            style ={styles.inputStyle}
            /></p>
            <p style ={styles.pStyle}>Height:
            <input value={height} name="height" 
            onChange={handleInputChange} type="text" 
            placeholder="in" 
            style ={styles.inputStyle}
            /></p>
            <p style ={styles.pStyle}>Weight:
            <input 
            value={weight} 
            name="weight" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="lbs" 
            style ={styles.inputStyle}
            /></p>
            <p style ={styles.pStyle}>Goals:
            <input 
            value={goals} 
            name="goals" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Goals" 
            style ={styles.inputStyle}
            /></p>
            <p style ={styles.pStyle}>Injury History:
            <input 
            value={injuryHistory} 
            name="injuryHistory" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Injury History" 
            style ={styles.inputStyle}
            /></p>
            <p style ={styles.pStyle}>Notes:
            <input 
            value={notes} 
            name="notes" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Notes: (, lifestyle, fun facts, etc.)" 
            style ={styles.inputStyle}
            /></p>
            <button type="button" onClick={handleFormSubmit} style ={styles.buttonStyle}>
                Submit
            </button>
        </form>
    </div>
</div>
  );
}

export default NewClientForm;