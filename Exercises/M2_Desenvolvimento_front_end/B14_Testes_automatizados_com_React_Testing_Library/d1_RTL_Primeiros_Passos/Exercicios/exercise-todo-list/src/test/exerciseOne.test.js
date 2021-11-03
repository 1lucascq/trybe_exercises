import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

//      EXERCÍCIO 1:
// Necessário um botão para adicionar a tarefa.
// Botão precisa conter o texto "Adicionar".
// Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.

// afterEach(cleanup)

const TASK = 'Estudar!'
describe('Testando o botão de adicionar tarefas', () => {  
  test('Verificando se o botão existe no documento', () => {
    render(<App />)
    const addBtn = screen.getByText('Adicionar');
  
    expect(addBtn).toBeInTheDocument();
    expect(addBtn.type).toBe('button');
  });

  test('Verificando se o botão salva a tarefa ao ser clicado', () => {
    render(<App />)
    const addBtn = screen.getByText('Adicionar');
    const input = screen.getByLabelText('Tarefa:')
  
    expect(addBtn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    userEvent.type(input, TASK)
    expect(screen.queryByText(TASK)).not.toBeInTheDocument();
    userEvent.click(addBtn);
    expect(screen.queryByText(TASK)).toBeInTheDocument();
  });
});
