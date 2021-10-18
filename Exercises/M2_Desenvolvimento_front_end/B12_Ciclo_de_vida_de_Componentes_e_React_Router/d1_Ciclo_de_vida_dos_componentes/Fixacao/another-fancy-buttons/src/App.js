import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()

    this.handleButtonClick1 = this.handleButtonClick1.bind(this);
    this.handleButtonClick2 = this.handleButtonClick2.bind(this);
    this.handleButtonClick3 = this.handleButtonClick3.bind(this);
  }
  handleButtonClick1(){
    console.log('clicked btn 1')
  }
  
  handleButtonClick2(){
    console.log('clicked btn 2')
  }
  
  handleButtonClick3(){
    console.log('clicked btn 3')
  }
  // componentDidUpdate(){
  //   function handleButton() {

  //   }
  // }
  compo
  render() {
    return (
      <div>
        <button onClick={ this.handleButtonClick1 }>Butao 1</button>
        <button onClick={ this.handleButtonClick2 }>Butao 2</button>
        <button onClick={ this.handleButtonClick3 }>Butao 3</button>
        
      </div>
    )
  }
}
