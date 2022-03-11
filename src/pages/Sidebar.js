import React, { Component } from 'react';
import { getCategories } from '../services/api';
import './style/sidebar.css';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
  }

  async componentDidMount() {
    const categorias = await getCategories();
    this.setState({
      categoriesList: categorias,
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div className="sidebar">
        { categoriesList.map((category) => (
          <label key={ category.id } htmlFor={ category.id } data-testid="category">
            <input id={ category.id } name="category" type="radio" value={ category.name } />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

export default Sidebar;
