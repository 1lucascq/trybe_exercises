import React from 'react';

class PokeDex extends React.Component {  
  render() {
    const { name, image, type, averageWeight } = this.props.pokeData;

    return (
      <div className="card">
        <img src={image} alt={`${name} imagem`}></img>
        <p>{name}</p>
        <p>Tipo: {type}</p>
        <p>Peso Médio: {averageWeight.value}{averageWeight.measurementUnit}</p>
      </div>
    );
  }
}



export default PokeDex;