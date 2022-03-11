import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductsDetails from './pages/ProductsDetails';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/produtcs/details" component={ ProductsDetails } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
