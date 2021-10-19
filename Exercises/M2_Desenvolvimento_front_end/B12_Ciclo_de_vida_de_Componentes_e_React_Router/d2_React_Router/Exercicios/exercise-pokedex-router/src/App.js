import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import About from './About';
import './App.css';
import pokemons from './data';
import NotFound from './NotFound';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <span> - </span>
          <Link to="/about">About</Link>
          
          <Switch>
            <Route
              exact path='/'
              render={(props) => (
                <Pokedex {...props} pokemons={pokemons} />
                )}
            >
            </Route>
            <Route
              exact path='/pokemonDetails/:id'
              render={(props) => (
                <PokemonDetails {...props} pokemon={pokemons[1]} />
                )}
            >
            </Route>
            <Route
              exact path='/about'
              component={ About }
            />
            <Route
              exact path='*'
              component={ NotFound }
            />

          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

