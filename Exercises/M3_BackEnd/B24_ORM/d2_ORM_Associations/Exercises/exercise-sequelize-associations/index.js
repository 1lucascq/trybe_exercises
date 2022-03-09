
const express = require('express');
const patientsController = require('./controllers/patientsController')
const plansController = require('./controllers/plansController')

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/patients', patientsController)
app.use('/plans', plansController)

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});