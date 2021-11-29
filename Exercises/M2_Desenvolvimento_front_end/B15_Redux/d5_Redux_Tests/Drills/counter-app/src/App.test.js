import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});


describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('the page should has a button and a text 10', () => {
  const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
  const buttonAdicionar = queryByText('Clique aqui');

  expect(buttonAdicionar).toBeInTheDocument();
  expect(queryByText('10')).toBeInTheDocument();
  });
});

/*                              ---> FUNCIONAMENTO DE TESTES ASSÍNCRONOS:

import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import renderWithRedux from './helpers';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});
*/


// Caso seja interessante alterar o valor inicial do clickReducer , isso também é possível passando como segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato original do state. Isto é:

// const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

// Observe: o objeto initialState representa o valor inicial do state . O clickReducer representa o reducer criado. O counter representa a propriedade que criamos dentro do nosso reducer . Vamos testar essa alteração no estado inicial:Caso seja interessante alterar o valor inicial do clickReducer , isso também é possível passando como segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato original do state. Isto é:

// const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

// Observe: o objeto initialState representa o valor inicial do state . O clickReducer representa o reducer criado. O counter representa a propriedade que criamos dentro do nosso reducer . Vamos testar essa alteração no estado inicial:
