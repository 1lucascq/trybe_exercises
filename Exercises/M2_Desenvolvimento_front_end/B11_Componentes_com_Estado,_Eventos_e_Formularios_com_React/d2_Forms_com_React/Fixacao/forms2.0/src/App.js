//✅ 1 - Crie um formulário com um campo select, dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
//✅ 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.
//✅ 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
//✅ 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
// 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
// 6 - Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .

import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox'? target.checked : target.value
    
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, age, address, yesIRead } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              onChange={ this.handleChange }
              value={ name }
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              defaultValue=""
              onChange={ this.handleChange }
              value={ age }

            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="address">
            Endereço:
            <textarea
              id="address"
              name="address"
              onChange={ this.handleChange }
              value={ address }
            />
          </label>

          <label htmlFor="yesIRead">
            Confirmo que li os termos.
            <input
              type='checkbox'
              id="yesIRead"
              name="yesIRead"
              onChange={ this.handleChange }
              value={ yesIRead }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;