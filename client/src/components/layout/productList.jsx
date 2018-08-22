import React, { Component } from 'react';
import ProductCard from '../cards/productcard.jsx';
// import axios from 'axios';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  render() {
    let nums = [...Array(8)];
    console.log(nums);

    return(
      <div className="product-list-container" id={this.props.id}>
        {nums.map((num, indx) => {
          return <ProductCard key={indx} />
        })}
      </div>
    );
  }
}

export default ProductList;