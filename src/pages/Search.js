import React from 'react';
import './style/search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>

    );
  }
}

export default Search;
