import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Componente extends Component {
  render() {
    return(
      <div className="main-content">
        {conteudos.map(e => (
          <div key={e.conteudo} className="card">
            <h4>{`O conteudo é: ${e.conteudo}`}</h4>
            <p>{`Status: ${e.status}`}</p>
            <p>{`Bloco: ${e.bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Componente