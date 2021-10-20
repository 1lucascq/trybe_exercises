import React, { Component } from 'react'
import pokemons from './data';

export default class PokemonDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    const pokemon = pokemons.find((poke) => poke.id === parseInt(id));
    const {name, type, averageWeight, image, summary, foundAt} = pokemon;

    return (
      <div>
        
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
            <p>{summary}</p>
          </div>
          <img src={image} alt={`${name} sprite`} />
          <div>
            {foundAt.map(locObj => (
              <>
              <p>{locObj.location}</p>              
              <img src={locObj.map} alt={`${locObj.location}`} />
              </>
            ))}

          </div>
        </div>

      </div>
    )
  }
}
