import React from 'react';
import './App.css';
import Div from './Component';

const task = (value) => {
  return (
    <li className='hello'>{value}</li>
  );
}

function App() {
  const toDo = ['Ler o conteúdo', 'Fazer os exercícios', 'Revisar a matéria'];
  return (
    toDo.map(each => task(each))
  );
}

export default App;