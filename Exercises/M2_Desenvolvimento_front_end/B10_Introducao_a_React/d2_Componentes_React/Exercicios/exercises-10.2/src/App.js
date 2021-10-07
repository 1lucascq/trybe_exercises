import './App.css';
import pokemons from './data';
import PokemonInfo from './Pokedex';

function App() {
  return (
    <main>
      <header>POKEDEX</header>
      <div className="App">
      {pokemons.map(pokemao => <PokemonInfo key={pokemao.id} pokeData={pokemao} />)}
      </div>
    </main>
  );
}

export default App;
