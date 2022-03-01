const sinon = require("sinon");
const { expect } = require("chai");

const MoviesController = {
  create: () => {},
};

describe("Ao chamar o controller de create", () => {
  describe("quando o payload informado não é válido", () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
    });

    it("é chamado o status com o código 400", async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith("Dados inválidos")).to.be.equal(true);
    });
  });

  describe("quando é inserido com sucesso", () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: "Example Movie",
        directedBy: "Jane Dow",
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
    });

    it("é chamado o status com o código 201", async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith("Filme criado com sucesso!")).to.be.equal(
        true
      );
    });
  });
});

//                                            --> Exercícios:

describe("Ao chamar o controller de findById", () => {
  describe("quando não existem filmes no banco de dados", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 1,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, "findById").resolves(null);
    });

    after(() => {
      MoviesService.findById.restore();
    });

    it('é chamado o método "status" passando 404', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "send" passando a mensagem "Not Found"', async () => {
      await MoviesController.findById(request, response);

      expect(response.send.calledWith("Not Found")).to.be.equal(true);
    });
  });

  describe("quando existem filmes no banco de dados", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 1,
      };
      // res.status(200).json({})
      // obs: o response.status recebe o response para que no teste, após o response.status(n), exista a função res.json(), que é chamada logo a seguir.
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, "findById").resolves({
        id: 1,
        title: "Example Movie",
        directedBy: "Jane Dow",
        releaseYear: 1999,
      });
    });

    after(() => {
      MoviesService.findById.restore();
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.findById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });
});
