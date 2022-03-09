// models/Book.js
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: DataTypes.STRING,
    planId: DataTypes.INTEGER,
    // Acaba não precisando pq o campo já aparece quando a requisição é feita em conjunto com o plano
  },
  {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan,
      { foreignKey: 'plan_id', as: 'plan' });
  };

  return Patient;
};