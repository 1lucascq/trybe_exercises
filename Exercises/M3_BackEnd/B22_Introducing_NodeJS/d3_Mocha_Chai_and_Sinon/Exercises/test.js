const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const checkNumbers = require('./ex1');

const FILE_CONTENT =  'testing 1, 2, 3';


describe('Check if a number is positive, neutral or negative', () => {
  describe('The function is called with a number as param', () => {
  
    it('Check if the number is positive', () => {
      // before(() => {
      //   sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
      // });

      // after(() => {
      //   fs.readFileSync.restore()
      // });
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

  // describe('When the file doesn\'t exists:', () => {
  
  //   before(() => {
  //     sinon.stub(fs, 'readFileSync').throws(null);
  //   })
    
  //   after(() => fs.readFileSync.restore())
    
  //   describe('the return', () => {
  //     const answer = readFiles('fileThatDontExist.txt');
  //     it('is equal to "null"', () => {
  //       expect(answer).equals(null)
  //     });
  //   });
  // });
});