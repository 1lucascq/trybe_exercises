// index.js
const express = require('express');
const { Patient, Plan, Surgery } = require('../models');

const router = express.Router();

// Necessário arquivo config.js para execução de uma Transactions:
// const Sequelize = require('sequelize');
// const config = require('./config/config');
// const sequelize = new Sequelize(
//   process.env.NODE_ENV === 'test' ? config.test : config.development
// );

router.get('/', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      // include: { model: Plan, as: 'plan' },
      include: { model: Plan, as: 'plan', attributes: { exclude: ['plan_id'] } }, // exclui o plan_id do PLAN
      attributes: { exclude: ['planId'] } // exclui o planId do PATIENT
      // order: [['age', 'ASC']] // isso ordena
    });

    return res.status(200).json(patients);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});



// Course:
router.get('/surgeries', async (req, res) => {
  return Patient.findAll({
    include: { model: Surgery, as: 'surgeries', through: { attributes: [] } }
  })
    .then((listOfPatients) => {
      if (!listOfPatients.length) {
        return res.status(404).send({ message: 'No patients found' });
      }
      return res.status(200).json(listOfPatients);
    })
    .catch(() => {
      return res.status(500).json({ message: 'Algo deu errado' });
  });
});


module.exports = router;