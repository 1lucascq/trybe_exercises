import { IFooCepAPI } from "./FooCepAPI";

class MockCepApi implements IFooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return 'getAddressByCEP';
  }
  async getCepByAddress(address: string, number: number): Promise<string> {
    return 'getCepByAddress';
  }
  
}