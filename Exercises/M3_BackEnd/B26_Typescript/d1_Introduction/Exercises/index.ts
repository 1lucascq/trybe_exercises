import readline from 'readline-sync'
import capacityUnits from './capacity';
import { lengthUnits } from './length';
import massUnits from './mass';
import exec from './utils';

// FIXME: A importação executa as funções automaticamente, o que impede o código de funcionar

const types: string[] =  ['length', 'mass', 'capacity'];
const typesArr: string[][] = [lengthUnits, massUnits, capacityUnits]
const selectedType: number = readline.keyInSelect(types, 'Escolha o tipo de conversão: ', { cancel: "SAIR" })

exec(typesArr[selectedType])
