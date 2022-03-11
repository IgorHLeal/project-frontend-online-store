import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <FaShoppingCart />
        </Link>
        <SideBar />
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default Home;
