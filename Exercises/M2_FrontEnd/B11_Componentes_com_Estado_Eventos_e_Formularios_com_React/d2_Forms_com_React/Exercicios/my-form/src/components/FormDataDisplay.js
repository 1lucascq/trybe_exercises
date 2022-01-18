import React, { Component } from 'react';

class FormDataDisplay extends Component {
  render() {
    const {
      stateData: {
        name, email, cpf, address, city, uf,
        residence, resume, position, description
      }
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { address }</div>
        <div> Cidade: { city }</div>
        <div> Estado: { uf }</div>
        <div> Tipo de residência: { residence }</div>
        <h3>Profissional</h3>
        <div> Currículo: { resume }</div>
        <div> Cargo: { position }</div>
        <div> Descrição do cargo: { description }</div>
      </div>
    );
  }
}

export default FormDataDisplay;