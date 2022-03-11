import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsDetails extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product-detail-name">
        <p>{product.title}</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductsDetails;
