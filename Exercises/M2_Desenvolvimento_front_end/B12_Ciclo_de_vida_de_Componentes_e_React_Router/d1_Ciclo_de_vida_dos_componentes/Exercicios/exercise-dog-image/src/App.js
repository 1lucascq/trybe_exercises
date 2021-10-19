import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      doggyPic: '',
      name: '',
      array: [],
    };
    this.getDoggo = this.getDoggo.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getPreviousDoggy = this.getPreviousDoggy.bind(this);
  }

  async componentDidMount() {
    if (localStorage.namedDogURL) {
      this.getPreviousDoggy();
    } else {
      this.getDoggo();
    }
  }

  shouldComponentUpdate(prevState, nextState) {
    if (nextState.doggyPic) {
      const { doggyPic } = nextState;
      if (doggyPic.includes('terrier')) {
        return false;
      }
      return true;
    }
  }

  componentDidUpdate() {
    const { doggyPic } = this.state;
    localStorage.setItem('dogURL', doggyPic);
  }

  getPreviousDoggy() {
    const parseStorage = JSON.parse(localStorage.namedDogURL);
    const lastDog = parseStorage[parseStorage.length - 1].message;
    this.setState({
      array: parseStorage,
      doggyPic: lastDog,
    });
  }

  async getDoggo() {
    this.setState({ doggyPic: '' });
    const APIfetch = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await APIfetch.json();
    this.setState({ doggyPic: data.message });
  }

  saveData() {
    const {
      doggyPic,
      name,
      array,
    } = this.state;
    const dogData = { doggyPic, name };
    const newArray = [...array, dogData];
    this.setState({
      array: newArray,
      name: '',
    });
    localStorage.setItem('namedDogURL', JSON.stringify(newArray));
  }

  render() {
    const { doggyPic, name } = this.state;

    if (!doggyPic) {
      return (
        <div className="App">
          <header className="App-header">
            <button type="button" onClick={ this.getDoggo }>Next Doggo</button>
            <p>...Doggo ts ts ts ts...</p>
          </header>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={ this.getDoggo }>Next Doggo</button>
          <button type="button" onClick={ this.saveData }>Save Doggo!</button>
          <input
            type="text"
            value={ name }
            onChange={ (e) => this.setState({ name: e.target.value }) }
            placeholder="digite o nome do doguinho"
          />
          <p>
            What a beautiful:
            {' '}
            { doggyPic.split('breeds/')[1].split('/')[0] }
          </p>
          <img src={ doggyPic } className="dog" alt="doooooog" />
        </header>
      </div>
    );
  }
}
