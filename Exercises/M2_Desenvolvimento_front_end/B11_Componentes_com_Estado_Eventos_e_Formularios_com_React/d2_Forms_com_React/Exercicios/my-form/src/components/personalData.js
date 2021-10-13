import React, { Component } from 'react';

class UserData extends Component {
  constructor() {
    super()

    this.verifyAddress = this.verifyAddress.bind(this);
  }

  verifyAddress(e) {
    const pattern = /^[a-zA-Z0-9 ]*$/;

    if (e.target.value.match(pattern)) this.props.handleChange(e)

  }

  render() {
  const { stateData, handleChange } = this.props
  const { name, email, address, uf, cpf, city, residence } = stateData

    return (
      
      <div>
        <label htmlFor="name">Nome:
          <input
            type="text"
            name="name"
            id="name"
            maxLength="40"
            onChange={ handleChange }
            value={ name }
            required
          />
        </label>

        <label htmlFor="email">Email:
          <input
            type="email"
            name="email"
            id="email"
            maxLength="50"
            onChange={ handleChange }
            value={ email }
            required
          />
        </label>

        <label htmlFor="cpf">CPF:
          <input
            type="number"
            name="cpf"
            id="cpf"
            maxLength="11"
            onChange={ handleChange }
            value={ cpf }
            required
          />
        </label>

        <label htmlFor="address">Endereço:
          <input
            type="text"
            name="address"
            id="address"
            maxLength="200"
            onChange={ this.verifyAddress }
            value={ address }
            required
          />
        </label>

        <label htmlFor="city">Cidade:
          <input
            type="text"
            name="city"
            id="city"
            maxLength="28"
            onChange={ handleChange }
            value={ city }
            required
          />
        </label>

        <label htmlFor="uf">Estado:
          <input
            onChange={ handleChange }
            value={ uf }
            type="comboBox" name="uf" id="uf" required maxLength="40" />
        </label>

        <label htmlFor="residence" value={ residence }>Tipo de Residência:
          <input type="radio" name="residence" value="casa" id="house" onChange={ handleChange } required maxLength="40" /> Casa
          <input type="radio" name="residence" value="apartamento" id="apt" onChange={ handleChange } required maxLength="40" /> Apartamento
        </label>

      </div>
)
  }
}

export default UserData