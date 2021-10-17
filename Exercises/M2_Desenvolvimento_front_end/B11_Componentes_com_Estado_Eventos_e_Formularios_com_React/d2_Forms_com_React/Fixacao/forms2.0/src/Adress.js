import React, { Component } from 'react';

class Address extends Component {
  render() {
  const { address, handleChange } = this.props

    return (
      
      <label htmlFor="address">
        Endereço{!address ? '*' : ''}:
        <textarea
          id="address"
          name="address"
          onChange={ handleChange }
          value={ address }
          />
      </label>
)
  }
}

export default Address