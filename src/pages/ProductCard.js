import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class ProductCard extends Component {
  constructor() {
    super();

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
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

export default ProductCard;
