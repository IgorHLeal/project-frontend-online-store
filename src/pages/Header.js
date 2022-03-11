import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <FaShoppingCart />
      </Link>
    );
  }
}

export default Header;
