/*
✅ 1 - Crie um formulário com um campo select, dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
✅ 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.
✅ 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
✅ 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
✅ 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
✅ 6 - Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .
✅7 - Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.
✅8 - Faça duas validações em um desses componentes filhos e uma em um outro.
9 - Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.
*/
import React, { Component } from 'react';
import Email from './Email';
import Name from './Name';
import Age from './Age';
import Address from './Adress';
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
          <fieldset>
          
            <Name name={name} handleChange={this.handleChange} />
            <Email email={email} handleChange={this.handleChange} />
            <Age age={age} handleChange={this.handleChange} />
            <Address address={address} handleChange={this.handleChange} />

          </fieldset>


          <label htmlFor="yesIRead">
            <input
              type='checkbox'
              id="yesIRead"
              name="yesIRead"
              onChange={ this.handleChange }
              value={ yesIRead }
              />
            Confirmo que li os termos.
          </label>

          <div>
            <label htmlFor="file">
              <input
                type='file'
                id="file"
                name="file"
                onChange={ this.handleChange }
                value={ yesIRead }
                />
            </label>
          </div>

        </form>
      </div>
    );
  }
}

export default Form;