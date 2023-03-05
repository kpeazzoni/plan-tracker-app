import React from 'react';


const styles = {
    buttonStyle: {
      backgroundColor: '#6cb4ac',
      color: 'white',
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '5px',
      margin: '10px 0',
      outline:  'none',
      // boxShadow: '0 2px 2px 0 lightgray',
      cursor: 'pointer',
      textTransform: 'uppercase'
    },
  };

const handleFormSignup = (e) => {
    e.preventDefault();
    console.log('form submitted');
alert('form submitted');
}


function FullscheduleButtons() {
    return (
        <div>
          <button style= {styles.buttonStyle} onClick={handleFormSignup}>
          View Full Schedule
          </button> 
        </div>
    )
}

export default FullscheduleButtons;