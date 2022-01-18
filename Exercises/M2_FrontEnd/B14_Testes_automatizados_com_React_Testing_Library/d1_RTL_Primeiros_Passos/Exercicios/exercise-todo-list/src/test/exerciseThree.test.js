import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';


//          EXERCÍCIO 3:
// Adicionar funcionalidade de selecionar uma task.
// Botão para apagar a task selecionada.
// Observe bem como os teste estão escritos, todos devem passar quando terminar a funcionalidade.
// OBS: O último teste precisou ser corrigido pois estava com alguns erros de assincrocinidade.

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Necessário ter um botão, com o texto Remover, e ele precisa estar desabilitado caso não exista nenhum item selecionado', () => {
    const { getByTestId } = render(<App />);
    const btnRemove = getByTestId('id-remove');
    expect(btnRemove).toBeInTheDocument();
    expect(btnRemove.value).toBe('Remover');
    expect(btnRemove.disabled).toBe(true);
  });

  test('Testando a seleção de elemento', async () => {
    const { getByLabelText, getAllByText, getByText, queryByText, findByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');
    const btnRemove = getAllByText('Remover');
    // console.log('REMOOOOOOOOOOOVE', btnRemove[0])
    fireEvent.change(inputTask, { target: { value: 'Exercitar' } })
    fireEvent.click(btnAdd);
    fireEvent.change(inputTask, { target: { value: 'Estudar' } })
    fireEvent.click(btnAdd);
    const selectTask = getByText('Exercitar');
    expect(selectTask).toBeInTheDocument();
    expect(btnRemove[0].disabled).toBe(true);
    fireEvent.click(selectTask);
    await (() => expect(btnRemove[0].disabled).toBe(false));
    fireEvent.click(btnRemove[0]);
    await (() => expect(findByText('Exercitar')).not.toBeInTheDocument());
  })
});
