// EvaluationResult.ts

import Evaluation from './Evaluation';

export default class EvaluationResult {
    // private _evaluation: Evaluation;
    // private _score: number = Number();

  constructor(private _evaluation: Evaluation, private _score: number) {
    this._evaluation = _evaluation;
    this.score = _score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');
    // o this.evaluation.score é a pontuação máxima definida na classe Evaluation;
    if (value > this.evaluation.score) {
        throw new Error(`A pontução máxima é ${this._evaluation.score} pontos.`);
    }
    this._score = value;
  }
}