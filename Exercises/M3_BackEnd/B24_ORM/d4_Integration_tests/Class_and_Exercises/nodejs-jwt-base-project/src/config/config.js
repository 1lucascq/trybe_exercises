require('dotenv').config();

const config = {
  username: "lucascq",
  password: "12345679",
  host: process.env.HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'jwt_exercise_dev'
  },
  test: {
    ...config,
    database: 'jwt_exercise_test'
  },
  production: {
    ...config,
    database: 'jwt_exercise'
  },
};
