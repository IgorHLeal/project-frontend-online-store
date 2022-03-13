import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
          <Route
            exact
            path="/productDetails/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
