import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonDetailsCart extends Component {
  addToCart = ({ target }) => {
    const { value } = target;
    let idProducts = [];
    if (localStorage.getItem('savedProducts')) {
      idProducts = JSON.parse(localStorage.getItem('savedProducts'));
    }
    idProducts = [...idProducts, value];
    localStorage.setItem('savedProducts', JSON.stringify(idProducts));
  }

  render() {
    const { productId } = this.props;

    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        value={ productId }
        onClick={ this.addToCart }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

ButtonDetailsCart.propTypes = {
  productId: PropTypes.objectOf.isRequired,
};

export default ButtonDetailsCart;
