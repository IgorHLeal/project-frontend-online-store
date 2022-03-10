import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsSearch from './components/ProductsSearch';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ ProductsSearch } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
