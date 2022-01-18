import React from 'react';

import profileImg from '../images/profile-picture.jpeg';
import githubIcon from '../images/github.svg';

import './PersonalInfo.css';

class PersonalInfo extends React.Component {
  render() {
    return (
      <aside id="personal-info">
        <img src={ profileImg } alt="Minha Foto" width="200px" />
        <h2>Lucas Costa Quadros</h2>
        <p>Rua Francisco Anolino de Souza, 15, Barcelona Park - Montes Claros - MG</p>
        <p>(38) 99933-4321</p>
        <p>1lucascq@gmail.com</p>
        <p>
          <a href="https://github.com/1lucascq" target="_blank" rel="noopener noreferrer">
            <img src={ githubIcon } alt="GitHub" width="25px" />
          </a>
        </p>
      </aside>
    );
  }
}

export default PersonalInfo;