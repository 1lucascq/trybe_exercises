import React from 'react';

class App extends React.Component {
  constructor() {
    super()
        
    this.button1 = this.button1.bind(this);
    
    this.button2 = this.button2.bind(this);
    
    this.button3 = this.button3.bind(this);
    
    this.state = {
      cliquesB1: 0,
      cliquesB2: 0,
      cliquesB3: 0
    }
  }
  
  button1() {
    this.setState((previousState, _props) => ({
      cliquesB1: previousState.cliquesB1 + 1
    }))
    console.log(this.defineColor(this.state.cliquesB1 - 1))
  }
  
  button2() {
    this.setState((prevState, _props) => ({cliquesB2: prevState.cliquesB2 + 1}))
    console.log(this.defineColor(this.state.cliquesB2 - 1))

  }

  button3() {
    this.setState((prevState, _props) => ({
      cliquesB3: prevState.cliquesB3 + 1
    }))
    console.log(this.defineColor(this.state.cliquesB3 - 1))
  }

  defineColor(n) {
    return n % 2 === 0 ? 'tomato' : 'cyan';
  }

  render() {
    return (
      <div>
        <button 
          style={{ backgroundColor: this.defineColor(this.state.cliquesB1)}}
          onClick={this.button1}>{this.state.cliquesB1}
        </button>

        <button 
          style={{ backgroundColor: this.defineColor(this.state.cliquesB2)}}
          onClick={this.button2}>{this.state.cliquesB2} 
          </button>

        <button
          style={{ backgroundColor: this.defineColor(this.state.cliquesB3)}}
          onClick={() => this.button3()}>{this.state.cliquesB3}

        </button>
      </div>
    );
  }
}

export default App;
