import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './style/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <FaShoppingCart />
        </Link>
        <main className="main">
          <Sidebar />
          <h2
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </main>

      </div>
    );
  }
}

export default Home;
