import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ButtonCart from './ButtonCart';

class ProductCard extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      click: false,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      click: true,
    });
  }

  addToCart({ target }) {
    const { value } = target;
    let idProducts = [];
    if (localStorage.getItem('savedProducts')) {
      idProducts = JSON.parse(localStorage.getItem('savedProducts'));
    }
    idProducts = [...idProducts, value];
    localStorage.setItem('savedProducts', JSON.stringify(idProducts));
  }

  render() {
    const { click } = this.state;
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{ product.title }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
        <button
          type="button"
          onClick={ this.handleClick }
          id="bttn-detail"
          data-testid="product-detail-link"
        >
          Detalhes
        </button>
        { click && <Redirect
          to={ `/productDetails/${product.id}` }
        />}
        <ButtonCart productId={ product.id } addToCart={ this.addToCart } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

export default ProductCard;
