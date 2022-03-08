'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        field: 'page_quantity',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
