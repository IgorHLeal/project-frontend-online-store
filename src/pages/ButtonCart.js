import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonCart extends Component {
  render() {
    const { productId } = this.props;
    const { addToCart } = this.props;

    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        value={ productId }
        onClick={ addToCart }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

ButtonCart.propTypes = {
  productId: PropTypes.objectOf.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ButtonCart;
