import React from 'react';
import './buttons.css';

// const styles = {
//     buttonStyle: {
//       backgroundColor: '#6cb4ac',
//       color: 'white',
//       fontSize: '16px',
//       padding: '10px 20px',
//       borderRadius: '5px',
//       margin: '10px 0',
//       outline:  'none',
//       boxShadow: '0 2px 2px 0 lightgray',
//       cursor: 'pointer',
//       textTransform: 'uppercase'
//     },
//   };

const handleFormSignup = (e) => {
    e.preventDefault();
    console.log('form submitted');
alert('form submitted');
}


function SignupButtons() {
    return (
        <div>
          <button className='buttons' onClick={handleFormSignup}>
          Sign Up
          </button> 
        </div>
    )
}

export default SignupButtons;