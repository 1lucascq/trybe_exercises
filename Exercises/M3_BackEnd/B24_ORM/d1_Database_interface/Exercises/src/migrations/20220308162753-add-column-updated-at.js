'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Book', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'updated_at'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Book', 'updated_at');
  }
};
