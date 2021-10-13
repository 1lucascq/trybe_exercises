import React, { Component } from 'react';

class Name extends Component {
  render() {
  const { name, handleChange } = this.props

    return (
      <label htmlFor="name">
      Nome{!name ? '*' : ''}:
        <input
          id="name"
          name="name"
          type="text"
          onChange={ handleChange }
          value={ name }
        />
      </label>
    )
  }
}

export default Name