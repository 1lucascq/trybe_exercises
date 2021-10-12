import React, { Component } from 'react';

class Email extends Component {
  render() {
  const { email, handleChange } = this.props

    return (
      <label htmlFor="email">
        Email{!email ? '*' : ''}:
        <input
          id="email"
          name="email"
          type="email"
          onChange={ handleChange }
          value={ email }
        />
      </label>
    )
  }
}

export default Email