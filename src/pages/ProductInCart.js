import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductInCart extends Component {
  render() {
    const {
      quantityOfProduct,
      title,
    } = this.props;

    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {quantityOfProduct}
        </p>
      </div>
    );
  }
}

ProductInCart.propTypes = {
  quantityOfProduct: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductInCart;
