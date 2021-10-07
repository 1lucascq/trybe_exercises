// Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.
// Pokedex : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon .

// arquivo Order.js
import React from 'react';

class PokemonInfo extends React.Component {
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

export default PokemonInfo;