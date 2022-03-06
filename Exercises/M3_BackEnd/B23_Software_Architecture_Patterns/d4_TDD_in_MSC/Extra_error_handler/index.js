const express = require('express');

const app = express();
const employeesController = require('./controllers/employeesController');
const moviesController = require('./controllers/moviesController');
const { dataValidation } = require('./middlewares/dataValidation');

app.use(express.json());

app.post('/employees', dataValidation, employeesController.create);
app.post('/movies', moviesController.create);

app.listen(3000, () => console.log('App running on Port 3000'));