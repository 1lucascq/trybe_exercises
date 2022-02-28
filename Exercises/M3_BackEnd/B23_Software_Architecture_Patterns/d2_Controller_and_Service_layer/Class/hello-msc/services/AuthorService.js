// services/Authors.js

const AuthorModel = require('../models/AuthorsModel');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
  }

const getAll = async () => {
  const authors = await AuthorModel.getAll();

  return authors.map(getNewAuthor);
}

const findById = async (id) => {
  const author = await AuthorModel.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);
  if (!validAuthor) return false;
  
  const [author] = await AuthorModel.createAuthor(firstName, middleName, lastName);
  const authorId = author.insertId; 
  
  const existingAuthor = await AuthorModel.findByName(firstName, middleName, lastName);
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  return getNewAuthor({
    id: authorId,
    firstName,
    middleName,
    lastName,
  })
};

const findById = async (id) => {
  // Solicitamos que o model realize a busca no banco
  const author = await AuthorModel.findById(id);

  // Caso nenhuma pessoa autora seja encontrada, retornamos um objeto de erro.
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  // Caso haja uma pessoa autora com o ID informado, retornamos essa pessoa
  return author;
}

module.exports = {
  getAll,
  findById,
  createAuthor,
  findById
}
