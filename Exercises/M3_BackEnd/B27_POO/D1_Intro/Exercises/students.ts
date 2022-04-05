// matrícula, nome, 4 notas de prova, 2 notas de trabalho.
type grade = number

class Students {
  private _registration: number;
  name: string;
  testGrades: grade[];
  projectGrades: grade[];

  constructor(
    _registration: number,
    name: string,
    testGrades: grade[],
    projectGrades: grade[]
  ) {
    this._registration = _registration;
    this.name = name;
    this.testGrades = testGrades;
    this.projectGrades = projectGrades;
  };

  sum() {
    const totalTestGrades = this.testGrades.reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0)
    const totalProjectsGrades = this.projectGrades.reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0)
  
    return totalTestGrades + totalProjectsGrades;
  };


  avg() {
   return (this.sum()/(this.projectGrades.length + this.testGrades.length))
  };  

      
}
