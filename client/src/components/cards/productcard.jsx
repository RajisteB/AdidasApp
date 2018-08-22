import React from 'react';
import Product from '../../images/quartershot02.jpg';

const ProductCard = ( props ) => {
  return (
    <div className="card">
      <img src={Product} alt=""/>
      <h2>Adidas Light MD Runner</h2>
      <h4>$140.00</h4>
    </div>
  );
}

export default ProductCard;