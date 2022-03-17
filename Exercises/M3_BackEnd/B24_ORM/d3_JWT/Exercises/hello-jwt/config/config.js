require('dotenv').config();

const config = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
  },
  test: {
    ...config,
  },
  production: {
    ...config,
  },
};
