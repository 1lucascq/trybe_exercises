// models/Book.js
module.exports = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define('PatientSurgeries', {},
  {
    timestamps: false,
    tableName: 'Patient_surgeries',
    underscored: true,
  });

  PatientSurgeries.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };
  
  return PatientSurgeries;
};