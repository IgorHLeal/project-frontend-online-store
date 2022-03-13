import React from 'react';
import PropTypes from 'prop-types';
import './style/search.css';
import ProductCard from './ProductCard';

class Search extends React.Component {
  handleChange = ({ target }) => {
    const { value } = target;
    const { updateSearchWord } = this.props;
    updateSearchWord(value);
  };

  render() {
    const { searchDisabled, handleClickSearch, products } = this.props;
    return (
      <div className="search">
        <input type="text" data-testid="query-input" onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="query-button"
          disabled={ searchDisabled }
          onClick={ handleClickSearch }
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

Search.propTypes = {
  searchDisabled: PropTypes.bool.isRequired,
  handleClickSearch: PropTypes.func.isRequired,
  products: PropTypes.arrayOf.isRequired,
  updateSearchWord: PropTypes.func.isRequired,
};

export default Search;
