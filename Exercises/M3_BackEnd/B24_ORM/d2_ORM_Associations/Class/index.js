// index.js
const express = require('express');
const { Address, Employee, User, Book, UserBooks } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
      // order: [['age', 'ASC']] // só testando como o order funciona
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { includeAddresses } = req.query;
    const employee = await Employee.findOne({ where: { id } });

    //          --> Eager Loading
    // const employee = await Employee.findOne({
    //     where: { id },
    //     include: [{
    //       model: Address, as: 'addresses',
    //       attributes: { exclude: ['number', 'employee_id'] } // Exclui o campo 'number' do retorno da requisição
    //     }],
    //   });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    
    //          --> Lazy Loading --> Carrega os dados do endereço somente quando solicitado.
    if (includeAddresses) {
      const addresses = await Address.findAll({ where: { employeeId: id }});
      return res.status(200).json({ employee, addresses })
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.get('/userbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`On: ${PORT}`));

module.exports = app;