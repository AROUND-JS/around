'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      user_no: {
        field: "user_no",
        type: Sequelize.INTEGER(11),
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      user_email: {
        field: "user_email",
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        primaryKey: true,
        validate: {
          isEmail: true
      }
      },
      user_name: {
        field: "user_name",
        type: Sequelize.STRING(10),

        allowNull: false
      },
      user_nickname: {
        field: "user_nickname",
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      user_pw: {
        field: "user_pw",
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      user_phone: {
        field: "user_phone",
        type: Sequelize.STRING(11),
        allowNull: false
      },
      user_salt: {
        field: "user_salt",
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()')
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'user'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
