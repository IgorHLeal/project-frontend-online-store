import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromID } from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const responseProduct = await getProductsFromID(id);
    this.setState({
      product: responseProduct,
    });
  }

  render() {
    const { product } = this.state;

    return (
      <>
        <p data-testid="product-detail-name">{product.title}</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
      </>

    );
  }
}

// ProductsDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };

export default ProductDetails;
