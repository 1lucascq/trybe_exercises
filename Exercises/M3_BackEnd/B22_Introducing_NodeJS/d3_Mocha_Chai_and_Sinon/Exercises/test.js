const { expect } = require('chai');
const checkNumbers = require('./ex1-3');
const sinon = require('sinon');
const fs = require('fs');

describe('1..3: Check if a number is positive, neutral or negative', () => {
  describe('The function is called with a number as param', () => {
  
    it('Check if the number is positive', () => {
      const answer = checkNumbers(7)
      expect(answer).to.be.a('string');
      expect(answer).to.be.equals('positive');
    });
    it('Check if the number is neutral', () => {
      const answer = checkNumbers(0)
      expect(answer).to.be.a('string');
      expect(answer).to.be.equals('neutral');
    });

    it('Check if the number is negative', () => {
      const answer = checkNumbers(-7)
      expect(answer).to.be.a('string');
      expect(answer).to.be.equals('negative');
    });
  });

  describe('The function is called with a string as param', () => {
    it('Check if the return is an error', () => {
      const DEFAULT_ERROR = 'The function must be called with a NUMBER';
      const answer = checkNumbers('two')
      expect(answer).to.be.a('string');
      expect(answer).to.be.equals(DEFAULT_ERROR);

    });
  });
});

// -----------------------------------------------------------------------------------------------------

const FILE_CONTENT =  'exercises 4 and 5';
const writeNewFile = require('./ex4-5');
describe('4..5: Check if the function writes a specified content in a file', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns('');
  });
  after(() => {
    fs.writeFileSync.restore()
  });

  it('Returns a "Ok" after write a file', () => {
    const answer = writeNewFile('testFile.txt', FILE_CONTENT)
    
    expect(answer).to.be.a('string');
    expect(answer).to.be.equals('Ok!');

  });
})
