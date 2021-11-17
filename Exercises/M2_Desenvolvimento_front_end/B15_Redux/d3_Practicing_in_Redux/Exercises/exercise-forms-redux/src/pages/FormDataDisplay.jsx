import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { personalData } = this.props;
    const { professionalData } = this.props;
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
    } = personalData;

    const {
      curriculo,
      cargo,
      descricao,
    } = professionalData;

    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalData: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string,
  }).isRequired,
  professionalData: PropTypes.shape({
    curriculo: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  personalData: state.formReducer.dadosPessoais,
  professionalData: state.formReducer.dadosProfissionais,
});

connect(mapStateToProps, null)(FormDataDisplay);
