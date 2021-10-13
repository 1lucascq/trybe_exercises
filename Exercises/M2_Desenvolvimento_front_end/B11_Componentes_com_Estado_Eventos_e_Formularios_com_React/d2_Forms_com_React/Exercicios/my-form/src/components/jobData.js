import React, { Component } from 'react';

class JobData extends Component {
  render() {
  const { stateData, handleChange } = this.props
  const { resume, position, description } = stateData

    return (

      <div>

        <label htmlFor="resume">Resumo do Currículo:
          <textarea 
            type="textArea" 
            name="resume" 
            id="resume" 
            maxLength="1000" 
            onChange={ handleChange }
            value={ resume }
            required 
          />
        </label>

        <label htmlFor="position">Cargo:
          <textarea 
            type="textArea" 
            name="position" 
            id="position" 
            maxLength="40" 
            onChange={ handleChange }
            onMouseEnter={() => alert('Preencha com cuidado esta informação.') }
            value={ position }
            required 
          />
        </label>

        <label htmlFor="description">Descrição:
          <input 
            type="text" 
            name="description" 
            id="description" 
            maxLength="500" 
            onChange={ handleChange }
            value={ description }
            required 
          />
        </label>

      </div>

    )
  }
}

export default JobData
