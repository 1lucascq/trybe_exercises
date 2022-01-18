// src/App.js
import React from 'react';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';

class App extends React.Component {
  render() {
    console.log('teste')
    return (
      <div>
        <ButtonClicks />
        <NumberClicks />
      </div>
    );
  }
}
export default App;