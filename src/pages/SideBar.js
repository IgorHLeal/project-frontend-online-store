import React, { Component } from 'react';
import { getCategories } from '../services/api';

class SideBar extends Component {
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
      <div>
        { categoriesList.map((category) => (
          <label htmlFor="category" key={ category.id } data-testid="category">
            { category.name }
            <input name="category" type="radio" />
          </label>
        ))}
      </div>
    );
  }
}

export default SideBar;
