import React, { Component } from 'react';

class Age extends Component {
  render() {
  const { age, handleChange } = this.props

    return (
      <label htmlFor="age">
        Idade{!age ? '*' : ''}:
        <select
          id="age"
          name="age"
          defaultValue=""
          onChange={ handleChange }
          value={ age }
          
          >
          <option value="">Selecione</option>
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>
      </label>
)
  }
}

export default Age