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
//                                        RESOLU????O DO COURSE
//  --------------------------------------------------------------------------------------------
/*
import { exit } from "process";
import readline from "readline-sync";
import Months from "./Months";
import Seasons from "./Seasons";

const monthsNames = Object.values(Months).
    map(item => item);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um m??s do ano", { cancel: "SAIR" });
// O m??todo .keyInSelect mostra uma interface
// de escolha para a pessoa usu??ria

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
// Criamos um objeto onde suas chaves s??o as esta????es
// e seus valores s??o os meses. Note abaixo um segundo
// objeto onde, sendo do hemisf??rio oposto, as esta????es
// s??o opostas tamb??m

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

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisf??rio", { cancel: "SAIR" });
// O m??todo .keyInSelect mostra uma interface
// de escolha para a pessoa usu??ria

if (choiceHemisphere === -1) {
    console.log("Saindo!");
    exit();
}

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`M??s: \n${month}`);
console.log(`Hemisf??rio: \n${hemisphere}`);
console.log(`Esta????es:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // S??o os meses de cada esta????o. Caso esteja
    // inclu??do em mais de uma esta????o, o console
    // abaixo ir?? adicionar

    if (months.includes(month)) console.log(seasons);
});
*/