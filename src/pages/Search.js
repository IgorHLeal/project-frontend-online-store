import React from 'react';
import { getProductsFromQuery } from '../services/api';
import './style/search.css';
import ProductCard from './ProductCard';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedWord: '',
      products: [],
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchedWord: value,
    });
  }

  handleClick = async () => {
    const { searchedWord } = this.state;
    const resultByQuery = await getProductsFromQuery(searchedWord);
    this.setState({
      products: resultByQuery.results,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="search">
        <input type="text" data-testid="query-input" onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        {products.length > 0
        && products.map((product) => (
          <ProductCard product={ product } key={ product.id } />
        ))}
      </div>
    );
  }
}

export default Search;
