import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  handleClick = ({ target }) => {
    const { id } = target;
    const { handleClickSideBar } = this.props;
    handleClickSideBar(id);
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div className="sidebar">
        { categoriesList.map((category) => (
          <label key={ category.id } htmlFor={ category.id } data-testid="category">
            <input
              id={ category.id }
              name="category"
              type="radio"
              value={ category.name }
              onClick={ this.handleClick }
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

Sidebar.propTypes = {
  handleClickSideBar: PropTypes.func.isRequired,
};

export default Sidebar;
