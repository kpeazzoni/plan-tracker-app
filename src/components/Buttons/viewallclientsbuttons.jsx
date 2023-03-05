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
      // boxShadow: '0 2px 2px 0 gray',
      cursor: 'pointer',
      textTransform: 'uppercase',
  }
};

const handleviewallclients = (e) => {
    e.preventDefault();
    console.log('form submitted');
alert('form submitted');
}


function ViewallclientsButtons() {
    return (
        <div>
          <button style= {styles.buttonStyle} onClick={handleviewallclients}>
          View All Clients
          </button> 
        </div>
    )
}

export default ViewallclientsButtons;