// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  // COM ASYNC & AWAIT
  async fetchCharacters() {
    const APIfetch = await fetch('https://rickandmortyapi.com/api/character')
    const APIobject = await APIfetch.json()
    
    this.setState({characters: APIobject.results})
  };

  
  //  Primeira maneira: --> COM .then
// fetchCharacters() {
//   fetch('https://rickandmortyapi.com/api/character')
//   .then(response => response.json())
//   .then(data => {
//     this.setState({characters: data.results})
//   })
// }

componentDidMount() {
  this.fetchCharacters();
}

//  Segunda maneira: --------> AMBAS FUNCIONAM DA MESMA FORMA
// componentDidMount() {
//   fetch('https://rickandmortyapi.com/api/character')
//   .then(response => response.json())
//   .then(data => {
//     this.setState({characters: data.results})
//   })
// }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;