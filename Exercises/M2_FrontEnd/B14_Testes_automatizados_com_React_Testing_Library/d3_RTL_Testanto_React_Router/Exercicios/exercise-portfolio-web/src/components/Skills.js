import React from 'react';

import './Skills.css';

const basic = 'Básico';
const intermediate = 'Intermediário';
const advanced = 'Avançado';

class Skills extends React.Component {
  render() {
    return (
      <section id="skills">
        <h3>React</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>RTL</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>CSS</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step ">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>BLABLABLA</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>BLEBLEBLE</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>
      </section>
    );
  }
}

export default Skills;