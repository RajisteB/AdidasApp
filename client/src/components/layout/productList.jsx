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
    if (this.props.footwear) {
      return (
        <div className="product-list-container" id={this.props.id}>
          {this.props.footwear.map(product => {
            return ( 
              <ProductCard 
                key={product.prodID} 
                ID={product.prodID}
                price={product.localPrice}
                regularPrice={product.regularPrice}
                imgUrl={product.imageURI}
                productUrl={product.modelQuickViewDetails.linkUrl}
                shipping={product.modelQuickViewDetails.freeShipping}
                caption={product.caption}
                description={this.props.the_Description}
              />
            );
          })}
        </div>
      );
    } else {
      return <i className="fas fa-spinner fa-pulse fa-2x"></i>;
    }

  }
}

export default ProductList;