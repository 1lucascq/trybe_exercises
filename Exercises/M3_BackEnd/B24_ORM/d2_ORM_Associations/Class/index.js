// index.js
const express = require('express');
const { Address, Employee, User, Book } = require('./models');


// Necessário arquivo config.js para execução de uma Transactions:
const Sequelize = require('sequelize');
const config = require('./config/config');
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);

const app = express();

app.use(express.json());

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

//          --> Código sem tratamento, não seguindo as diretrizes do ACID.
// app.post('/employees', async (req, res) => {
//   try {
//     const { firstName, lastName, age, city, street, number } = req.body;

//     const employee = await Employee.create({ firstName, lastName, age });

//     await Address.create({ city, street, number, employeeId: employee.id });

//     return res.status(201).json({ message: 'Cadastrado com sucesso' });
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

//          --> Unmanaged Transaction
// app.post('/employees', async (req, res) => {
//   // Primeiro iniciamos a transação
//   const t = await sequelize.transaction();

//   try {
//     const { firstName, lastName, age, city, street, number } = req.body;
//     console.log('first')
//     // Depois executamos as operações
//     const employee = await Employee.create(
//       { firstName, lastName, age },
//       { transaction: t },
//     );

//     await Address.create(
//       { city, street, number, employeeId: employee.id },
//       { transaction: t },
//     );

//     // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
//     // Com isso, podemos finalizar a transação usando a função `commit`.
//     await t.commit();

//     return res.status(201).json({ message: 'Cadastrado com sucesso' });
//   } catch (e) {
//     // Se entrou nesse bloco é porque alguma operação falhou.
//     // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
//     await t.rollback();
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

//          --> Managed Transaction
app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });

    });
    return res.status(201).json({
      id: employee.id, // esse dado será nossa referência para validar a transação
      message: 'Cadastrado com sucesso'
    });
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`On: ${PORT}`));

module.exports = app;