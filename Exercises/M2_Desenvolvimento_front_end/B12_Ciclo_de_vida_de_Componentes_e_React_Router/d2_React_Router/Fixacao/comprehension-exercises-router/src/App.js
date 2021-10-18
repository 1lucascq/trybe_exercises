import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/about" component={ About }></Route>
        <Route path="/users" component={ Users }></Route>
      </BrowserRouter>

    );
  }
}

export default App;
