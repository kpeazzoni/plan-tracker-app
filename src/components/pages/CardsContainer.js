import React from 'react';

function CardsContainer(props) {
  return (
    <div className={`container${props.fluid ? '-fluid' : ''}`}>
      {props.children}
    </div>
  );
}

export default CardsContainer;