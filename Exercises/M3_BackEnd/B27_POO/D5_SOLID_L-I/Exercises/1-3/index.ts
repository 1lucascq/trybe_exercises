// ./index.ts
import CepService from './CepService';
import IFooCepAPI from "./FooCepAPI";


async function main() {
  const cepSvc = new CepService(new IFooCepAPI());
  // alternatively --> const cepSvc = new CepService(new MockCepApi());


  console.log('get address by cep', '->', await cepSvc.addressByCep('xx.xxx-xx', 10));
  console.log('get cep by address', '->', await cepSvc.cepByAdress('street foo, between bar and baz', 10));
}

main();