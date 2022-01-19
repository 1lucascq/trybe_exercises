import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import responseAPI from './mocks';

const DATA = responseAPI;

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
    global.fetch = jest.fn(async () => ({
      json: async () => DATA
    }))
    
    render(<App/>)
  })
  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', async () => {
    const rickSanchez = await screen.findByRole('heading', { name: /Rick Sanchez/i })

    expect(rickSanchez).toBeInTheDocument()
  })

//OBS: o getByRole tbm funcionaria pq o código está mockado.

  test('Verifica se existem o input de texto e o botão "Buscar"', async () => {
    const searchButton = await screen.findByRole('button', { name: /Buscar/i })
    const searchInput = await screen.findByRole('textbox', { placeHolder: /Rick Sanches.../i })

    expect(searchButton).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', async () => {
    const searchButton = await screen.findByRole('button', { name: /Buscar/i })
    const searchInput = await screen.findByRole('textbox', { placeHolder: /Rick Sanches.../i })
    const Smiths = await screen.findAllByRole('heading', {name: /Smith/i})

    userEvent.type(searchInput, 'Smith');
    userEvent.click(searchButton);
    expect(Smiths).toHaveLength(4)
  })
})
