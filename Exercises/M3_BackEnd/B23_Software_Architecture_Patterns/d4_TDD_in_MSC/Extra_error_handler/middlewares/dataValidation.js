const {
  validateName,
  validateDocument,
  validateOffice,
  validateActive,
} = require("../utils/moviesValidations");

const dataValidation = async (req, res, next) => {
  const { firstName, lastName, document: cpf, office, active } = req.body;

  try {
    validateName(firstName, lastName);
    validateDocument(cpf);
    validateOffice(office);
    validateActive(active);
    
  } catch (err) {
    console.log(err.status, err.message);
    next(err)
  }
  

  return res.status(201).json();
};

module.exports = { dataValidation }