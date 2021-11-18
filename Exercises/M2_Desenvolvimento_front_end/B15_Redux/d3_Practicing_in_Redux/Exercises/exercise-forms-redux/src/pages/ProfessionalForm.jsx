import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { changeProfessionalData } from '../redux/actions/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    const { changeData } = this.props;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          label="enviar"
          onClick={ () => changeData(this.state) }
        />
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  changeData: PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
//   changeData: (payload) => dispatch(changeProfessionalData(payload)),
// });

const mapDispatchToProps = { changeData: changeProfessionalData };

export default connect(null, mapDispatchToProps)(ProfessionalForm);
