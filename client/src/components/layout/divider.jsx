import React from 'react';

const Divider = (props) => {
  return (
    <div className="division">
      <h1>01</h1>
      <h2>{props.category}</h2>
      <div className="short-line"></div>
    </div>
  );
}

export default Divider;