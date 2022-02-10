const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const readFiles = require('./readFiles');

const FILE_CONTENT =  'testing 1, 2, 3';


describe('Read files', () => {
  describe('When the file exists', () => {
  
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
    });

    after(() => {
      fs.readFileSync.restore()
    });

    describe('returns', () => {
      const answer = readFiles('file.txt');
      it('is a string', () => {
        expect(answer).to.be.a('string');
      });

      it('check if the return is equal to the file content: ', () => {
        expect(answer).equals(FILE_CONTENT);
      });
    });
  });

  describe('When the file doesn\'t exists:', () => {
  
    before(() => {
      sinon.stub(fs, 'readFileSync').throws(null);
    })
    
    after(() => fs.readFileSync.restore())
    
    describe('the return', () => {
      const answer = readFiles('fileThatDontExist.txt');
      it('is equal to "null"', () => {
        expect(answer).equals(null)
      });
    });
  });
});