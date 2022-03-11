import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Search from './Search';
import Header from './Header';
import './style/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main className="main">
          <Sidebar />
          <Search />
        </main>

      </div>
    );
  }
}

export default Home;
