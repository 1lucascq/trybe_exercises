import React from 'react';

import './Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <ul>
          <li>
            <img src="https://picsum.photos/id/1/100/100" alt="Imagem do Projeto 1" />
            <h3>Projeto 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc eget accumsan sapien.
              Sed porttitor ex diam, in posuere nisi scelerisque sit amet.
              Donec consectetur neque nec arcu cursus volutpat.
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/id/2/100/100" alt="Imagem do Projeto 2" />
            <h3>Projeto 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed porttitor ex diam, in posuere nisi scelerisque sit amet.
              Nunc eget accumsan sapien.
              Donec consectetur neque nec arcu cursus volutpat.
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/id/3/100/100" alt="Imagem do Projeto 3" />
            <h3>Projeto 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc eget accumsan sapien.
              Sed porttitor ex diam, in posuere nisi scelerisque sit amet.
              Donec consectetur neque nec arcu cursus volutpat.
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Projects;