const sinon = require('sinon');
const { expect } = require('chai');
const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');


describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Busca por um filme no BD', () => {
  const respMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    // const respMovie = [respMovie]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(respMovie);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido um Id inválido', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(respMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create({ error: 404, message: 'Filme não encontrado.' });

      expect(response.message).to.be('Filme não encontrado.');
    });

    describe('quando é inserido um Id válido', () => {
      it('retorna um objeto', async () => {
        const response = await MoviesModel.create(respMovie);
  
        expect(response).to.be.a('object')
      });
  
      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesModel.create(respMovie);
  
        expect(response).to.have.a.property('id');
        expect(response).to.have.a.property('title');
        expect(response).to.have.a.property('directedBy');
        expect(response).to.have.a.property('releaseYear');
      });
    });
  })
});