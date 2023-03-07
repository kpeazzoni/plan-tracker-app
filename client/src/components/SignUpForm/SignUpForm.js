import React from 'react';

function SignUpForm(props) {
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        // const { } = e.target;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
      };
const firstName = ""
const lastName = ""
const username = ""
const password = ""

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

return (
    <div style={styles.formPlacement}>
      <form className="row justify-content-center" onSubmit={handleFormSubmit} style = {styles.formCard}>
            <p style={styles.pStyle}>Name: 
            <input style={styles.inputStyle}
            value={firstName}
            name="firstName" 
            onChange={handleInputChange} 
            type="text"
            placeholder="First Name" 
            />
            <input style={styles.inputStyle}
            value={lastName} 
            name="lastName" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Last Name" 
            /> </p>
            <p style={styles.pStyle}>Username: 
            <input style={styles.inputStyle}
            value={username} 
            name="username" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Username" 
            /></p>
            <p style={styles.pStyle}>Password: 
            <input style={styles.inputStyle}
            value={password} 
            name="password" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Password" 
            /></p>
            <button type="button" onClick={handleFormSubmit} style ={styles.buttonStyle}>
                Submit
            </button>
        </form>
    </div>

  );
}

export default SignUpForm;