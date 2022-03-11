import React, { Component } from 'react';
import Sidebar from './Sidebar';
import {
  getProductsFromQuery, getProductsFromCategory,
} from '../services/api';
import Search from './Search';
import Header from './Header';
import './style/home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: '',
      products: [],
    };
  }

  updateSearchWord = (text) => {
    this.setState({
      searchWord: text,
    });
  }

  handleClickSideBar = async (category) => {
    const resultByCategory = await getProductsFromCategory(category);
    this.setState({
      products: resultByCategory.results,
    });
  }

  handleClickSearch = async () => {
    const { searchWord } = this.state;
    const resultByQuery = await getProductsFromQuery(searchWord);
    this.setState({
      products: resultByQuery.results,
    });
  }

  render() {
    const { searchWord, products } = this.state;
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main className="main">
          <Sidebar handleClickSideBar={ this.handleClickSideBar } />
          <Search
            updateSearchWord={ this.updateSearchWord }
            handleClickSearch={ this.handleClickSearch }
            searchDisabled={ !searchWord || searchWord.length === 0 }
            products={ products }
          />
        </main>

      </div>
    );
  }
}

export default Home;
