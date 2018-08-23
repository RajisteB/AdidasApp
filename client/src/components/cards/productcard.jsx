import React from 'react';
import Product from '../../images/quartershot02.jpg';

const ProductCard = ( props ) => {
  if (props) {
    return (
      <div className="card">
        <img src={props.imgUrl} alt=""/>
        <h2>{props.caption}</h2>
        <h4>${props.price}</h4>
      </div>
    );
  } else {
    return <i className="fas fa-spinner fa-pulse"></i>
  }
}

export default ProductCard;