import React, { Component } from 'react';
import { getProductsFromID } from '../services/api';
import ProductInCart from './ProductInCart';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      quantityOfProducts: [],
      products: [],
    };
  }

  async componentDidMount() {
    if (localStorage.getItem('savedProducts')) {
      const savedProducts = JSON.parse(localStorage.getItem('savedProducts'));
      const quantityOfProducts = {};

      savedProducts.forEach((productId) => {
        if (quantityOfProducts[productId] > 0) {
          quantityOfProducts[productId] += 1;
        } else {
          quantityOfProducts[productId] = 1;
        }
      });
      console.log(quantityOfProducts);

      // Promise.all() visto em https://medium.com/sliit-foss/js-async-await-in-array-methods-9142a35c6d6f
      const products = await Promise.all(
        await Object.keys(quantityOfProducts).map(async (productId) => (
          getProductsFromID(productId)
        )),
      );
      await console.log(products);

      await this.setState({
        quantityOfProducts,
        products,
      });
    }
  }

  render() {
    const {
      quantityOfProducts,
      products,
    } = this.state;

    return (
      <>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <div>
          { products.map((product) => (
            <ProductInCart
              key={ product.id }
              quantityOfProduct={ quantityOfProducts[product.id] }
              title={ product.title }
            />
          )) }
        </div>
      </>
    );
  }
}

export default Cart;
