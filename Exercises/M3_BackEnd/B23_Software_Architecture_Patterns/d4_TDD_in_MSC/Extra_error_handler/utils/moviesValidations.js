const isValidCPF = require('./isValidCPF');

const validateRating = (rating) => {
  if (typeof rating !== 'number') {
    const ratingTypeError = { status: 400, message: '"rating" is required and must be a number' };
  }
  if (rating > 10 || rating < 1) {
    const rangeError = { status: 400, message: '"rating" must be between 1 and 10' };
  }
};

const validateName = (firstName, lastName ) => {
  console.log(firstName, lastName)
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    const nameTypeError = { status: 400, message: '"first/last name" is required and must be a string' };
    throw nameTypeError;
  }
  if (firstName.length > 45 || lastName.length > 45) {
    const nameLengthError = { status: 400, message: '"first/last name" must be at least 5 character long' };
    throw nameLengthError;
  }
  
  return true
};

const validateDocument = (cpf) => {
  if(!isValidCPF(cpf)) {
    const documentError = { status: 400, message: 'The field "CPF" must be contain a valid CPF string' };
    throw documentError;
  }

  return true;
}

const validateOffice = (office) => {
  if (typeof office !== 'number' || office.length === 3) {
    const officeError = { status: 400, message: '"office" is required and must be a string with the length 3' };
    throw officeError;
  }
  
  return true;
}

const validateActive = (active) => {
  if (typeof active !== 'boolean') {
    const activeError = { status: 400, message: '"active" is required and must be a boolean' };
    throw activeError;
  }

  return true;
}



module.exports = {
  validateName,
  validateRating,
  validateDocument,
  validateOffice,
  validateActive
}