import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={ history }>{ui}</Router>),
    history,
  };
}

describe('routes', () => {
  test('navigating from home to projects', () => {
    renderWithRouter(<App />);

    const personalInfo = screen.getByText(/Nome Completo/i);
    expect(personalInfo).toBeInTheDocument();

    userEvent.click(screen.getByText(/Projetos/i));

    const project = screen.getByText(/Projeto 1/i);
    expect(project).toBeInTheDocument();
  });

  test('navigating from home to getInTouch', () => {
    renderWithRouter(<App />);

    const personalInfo = screen.getByText(/Nome Completo/i);
    expect(personalInfo).toBeInTheDocument();

    userEvent.click(screen.getByText(/Entre em contato/i));

    const getInTouch = screen.getByText(/Mensagem de contato/i);
    expect(getInTouch).toBeInTheDocument();
  });

  test('landing on a bad page shows error 404', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/rota-inexistente');

    const pageNotFound = screen.getByText(/Página não encontrada/i);
    expect(pageNotFound).toBeInTheDocument();
  });
});