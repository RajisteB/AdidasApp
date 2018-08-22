import React from 'react';

const Divider = (props) => {
  return (
    <div className="division" id={props.id}>
      <h1>{props.num}</h1>
      <h2>{props.category}</h2>
      <div className="short-line"></div>
    </div>
  );
}

export default Divider;