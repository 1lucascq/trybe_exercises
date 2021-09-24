// 6. Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const service = require("./question6");
describe("testando a requisição", () => {
  service.fetchDogPic = jest.fn();
  afterEach(service.fetchDogPic.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchDogPic.mockResolvedValue("request success");

    service.fetchDogPic();
    expect(service.fetchDogPic).toHaveBeenCalled();
    expect(service.fetchDogPic).toHaveBeenCalledTimes(1);
    await expect(service.fetchDogPic()).resolves.toBe("request success");
    expect(service.fetchDogPic).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDogPic.mockRejectedValue("request failed");

    expect(service.fetchDogPic).toHaveBeenCalledTimes(0);
    await expect(service.fetchDogPic()).rejects.toMatch("request failed");
    expect(service.fetchDogPic).toHaveBeenCalledTimes(1);
  });
});
