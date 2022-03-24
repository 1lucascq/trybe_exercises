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
