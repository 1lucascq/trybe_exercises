import React from 'react';
import './App.css';
import Image from './Image';
import Order from './Order';
import Proptypes from './Proptypes';
// arquivo App.js, criado pelo create-react-app, modificado


class App extends React.Component {
  render() {
    const products = [
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },
      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      }
    ]
    return (
      <main className="App">
      <div className='composição-de-componentes'>
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
      </div>
      
      <div className='componentes-e-keys'>  
        <h1> Orders recently created </h1>
         {products.map((e, i) => <Order key={i} order={e} />)}
      </div>

      <div className='proptypes-e-checagem-de-tipos'>
        <Proptypes name='Bruce' lastName='Wayne' />
        <Proptypes />
      </div>


      </main>
    );
  }
}

export default App;
