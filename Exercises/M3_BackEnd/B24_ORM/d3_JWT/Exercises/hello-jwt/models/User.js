// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    // Tem que ser sem o ID aqui pq ele é colocado e retornado automaticamente pelo sequelize
    login: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  return User;
};