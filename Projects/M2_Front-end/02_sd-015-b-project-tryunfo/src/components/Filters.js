import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filters extends Component {
  render() {
    const {
      onFilterChange,
      filterCards,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.props;
    return (
      <>
        <label htmlFor="filterRare">
          Raridade:
          <select
            name="filterRare"
            id="filterRare"
            value={ filterRare }
            onChange={ onFilterChange }
            data-testid="rare-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="filterName">
          <input
            type="text"
            name="filterName"
            placeholder="Digite o nome"
            data-testid="name-filter"
            onChange={ onFilterChange }
            value={ filterName }
          />
        </label>

        <label htmlFor="filterTrunfo">
          Mostrar Trunfo:
          <input
            type="checkbox"
            name="filterTrunfo"
            id="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onFilterChange }
            data-testid="trunfo-filter"
          />
        </label>

        <button type="button" onClick={ filterCards }>
          Filtrar
        </button>
      </>
    );
  }
}

Filters.propTypes = {
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterCards: PropTypes.func.isRequired,
};
