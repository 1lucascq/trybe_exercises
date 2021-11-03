import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';
import userEvent from '@testing-library/user-event';

//      EXERCÍCIO 2:
// Use o array já disponibilizado no código para realizar os testes. Cada elemento do array será uma tarefa. Simule a adição de todas e depois verifique se elas estão aparecendo.
// Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela.// Necessário um botão para adicionar a tarefa.

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, getByText, queryByText } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const input = getByLabelText('Tarefa:');
    const addBtn = getByText('Adicionar');
    
    expect(input).toBeInTheDocument();
    listTodo.forEach(todo => userEvent.type(input, todo) && userEvent.click(addBtn))
    listTodo.forEach(todo => expect(queryByText(todo)).toBeInTheDocument())
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { queryByText } = render(<Item content="Estudar!"/>)
    expect(queryByText("Estudar!")).toBeInTheDocument()
  })
})
