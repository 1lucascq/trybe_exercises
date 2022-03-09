
const express = require('express');
const patientsController = require('./controllers/patientsController')

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/patients', patientsController)

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});