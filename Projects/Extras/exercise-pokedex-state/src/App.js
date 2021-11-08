// ✅ 1. Exiba um pokémon por vez. 
// ✅ 2. Ao apertar um botão de Próximo pokémon, a página passa a exibir o próximo pokémon da lista
// ✅ 3. Ao se chegar ao último pokémon da lista, a pokedex deve voltar para o primeiro pokémon no apertar do botão. 

// ✅ 4. Dois botões contendo os tipos Fire e Psychic.
// ✅ 5. A partir dessa seleção, a pokedex deve circular somente pelos pokémons daquele tipo.
// 6. Quando a página carrega, um desses filtros deve estar selecionado.


import './App.css';
import pokemons from './data';
import PokeDex from './Pokedex';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.nextButton = this.nextButton.bind(this);
    this.selectPsychic = this.selectPsychic.bind(this);
    this.selectFire = this.selectFire.bind(this);
    this.selectAll = this.selectAll.bind(this);
    
    this.state = {
      indexPoke: 0,
      selectedPokes: pokemons.filter(e => e.type === 'Electric')
    }
  }

  nextButton() {
    if(this.state.indexPoke === this.state.selectedPokes.length - 1) {
      return this.setState((_previousState, _props) => ({
        indexPoke: 0
      }));
    }

    this.setState((previousState, _props) => ({
      indexPoke: previousState.indexPoke + 1
    }))

  }

  selectPsychic() {
    this.setState((_previousState, _props) => ({
      selectedPokes: pokemons.filter(e => e.type === 'Psychic')
    }))
  }
  

  selectFire() {
    this.setState((_previousState, _props) => ({
      selectedPokes: pokemons.filter(e => e.type === 'Fire')
    }))
  }
  
  selectAll() {
    this.setState((_previousState, _props) => ({
      selectedPokes: pokemons
    }))
  }

  
  render() {
    return (
      <main>
        <header>POKEDEX</header>
        <div className="App">
          {<PokeDex key={pokemons[this.state.indexPoke].id}
            pokeData={this.state.selectedPokes[this.state.indexPoke]}
          />}

        </div>
        
        <section className="buttons">
          <button 
            style={{color: 'red'}}
            onClick={this.selectFire}
          >
            Fire
          </button>
          <button 
            style={{color: 'magenta'}}
            onClick={this.selectPsychic}
          >
            Psychic
          </button>
          
          <button 
            style={{color: 'white', background: 'black'}}
            onClick={this.selectAll}
          >
            Reset
          </button>
          
          <button
            className="btn"
            onClick={this.nextButton}>
              Próximo
          </button>
        </section>          

      </main>
    );
    }
}  

export default App;
