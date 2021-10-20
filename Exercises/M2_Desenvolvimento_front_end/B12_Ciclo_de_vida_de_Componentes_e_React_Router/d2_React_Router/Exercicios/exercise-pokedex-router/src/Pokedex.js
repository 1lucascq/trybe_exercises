import React from "react";
import Pokemon from "./Pokemon";
import Button from "./Button";
import "./pokedex.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PokemonDetails from './PokemonDetails';
import pokemons from "./data";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemonIndex: 0, filteredType: "all" };
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter((pokemon) => {
      if (filteredType === "all") return true;
      return pokemon.type === filteredType;
    });
  }

  moreInfo() {
    return (
      <BrowserRouter>
        <Route
          path="/pokemonDetails/"
          render={(props) => <PokemonDetails {...props} pokemon={pokemons[1]} />}
          />
      </BrowserRouter>
    );
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [
      ...new Set(pokemons.reduce((types, { type }) => [...types, type], [])),
    ];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemon} />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons("all")}
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map((type) => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button"
            >
              {type}
            </Button>
          ))}
        </div>
        <div className="pokedex-buttons-panel">
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={filteredPokemons.length <= 1}
        >
          Próximo pokémon
        </Button>

        <BrowserRouter>
          <Link to={`/pokemonDetails/${pokemon.id}`}>
            <Button className="pokedex-button">
              Mais Informações
            </Button>
          </Link>
          <Switch>
            <Route exact path="/pokemonDetails/:id" component={ PokemonDetails } />
          </Switch>
        </BrowserRouter>

        </div>
      </div>
    );
  }
}

export default Pokedex;
