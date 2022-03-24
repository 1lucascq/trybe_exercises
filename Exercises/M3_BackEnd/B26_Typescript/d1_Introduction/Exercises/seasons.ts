import readline from 'readline-sync'

enum Months {
  jan = "jan",
  feb = "feb",
  mar = "mar",
  apr = "apr",
  may = "may",
  jun = "jun",
  jul = "jul",
  aug = "aug",
  sep = "sep",
  oct = "oct",
  nov = "nov",
  dez = "dez",
}

enum Seasons {
  summer,
  autumn,
  winter,
  spring
};

function displaySeason(): string {
  const monthArr: string[] = Object.keys(Months);
  const hemispheres: string[] = ['north', 'south'];
  const seasonsInChosenMonth: string[] = [];
  const month: number = readline.keyInSelect(monthArr, 'choose a month: ');
  const chosenMonth: string = monthArr[month];

  const hemisphere: number = readline.keyInSelect(hemispheres, 'choose a hemisphere: ');
  const chosenHemisphere = hemispheres[hemisphere];

  if(chosenHemisphere === 'south') {
    const sum = [6, 7, 8, 9];
    const aut = [9, 10, 11, 12];
    const win = [12, 1, 2, 3];
    const spr = [3, 4, 5, 6];
    
    const seasons: number[][] = [sum, aut, win, spr];
    
    for (let seasonIndex: number = 0; seasonIndex < seasons.length; seasonIndex++) {
      for (let month: number = 0; month < seasons[seasonIndex].length; month++) {

        const chosenMonthIndex: number = monthArr.indexOf(chosenMonth);

        if (seasons[seasonIndex][month] === (chosenMonthIndex + 1)) {
          seasonsInChosenMonth.push(Seasons[seasonIndex])
        }
      }      
    }
  }
  
  if(chosenHemisphere === 'north') {
    const sum = [12, 1, 2, 3];
    const aut = [3, 4, 5, 6];
    const win = [6, 7, 8, 9];
    const spr = [9, 10, 11, 12];
    
    const seasons: number[][] = [sum, aut, win, spr];
    
    for (let seasonIndex: number = 0; seasonIndex < seasons.length; seasonIndex++) {
      for (let month: number = 0; month < seasons[seasonIndex].length; month++) {

        const chosenMonthIndex: number = monthArr.indexOf(chosenMonth);

        if (seasons[seasonIndex][month] === (chosenMonthIndex + 1)) {
          seasonsInChosenMonth.push(Seasons[seasonIndex])
        }
      }      
    }
  }

  if (seasonsInChosenMonth.length === 1) {
    const result: string = `In ${chosenMonth.toUpperCase()} we could be in ${seasonsInChosenMonth[0].toUpperCase()}`
    console.log(result);
    return result;
  }

  const result: string = `In ${chosenMonth.toUpperCase()} we could be in ${seasonsInChosenMonth[0].toUpperCase()} or ${seasonsInChosenMonth[1].toUpperCase()}`
  console.log(result);
  return result;
}

displaySeason();

//  --------------------------------------------------------------------------------------------
//                                        RESOLUÇÃO DO COURSE
//  --------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------
/*
import { exit } from "process";
import readline from "readline-sync";
import Months from "./Months";
import Seasons from "./Seasons";

const monthsNames = Object.values(Months).
    map(item => item);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceMonth === -1) {
    console.log("Saindo!");
    exit();
}

const seasonsSouth = {
    [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
    [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
    [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
    [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
    [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
    [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
    [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
    [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceHemisphere === -1) {
    console.log("Saindo!");
    exit();
}

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar

    if (months.includes(month)) console.log(seasons);
});
*/