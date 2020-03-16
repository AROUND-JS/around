'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('message_list', {
      m_user: {
        type: Sequelize.STRING,
          allowNull: false,
          references: {
            model : 'user',
            key : 'user_nickname' 
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
      },
      correspondent_no: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model : 'user',
          key : 'user_no' 
        },
        onDelete: 'CASCADE'
      },
      m_text: {
          type: Sequelize.STRING,
          allowNull: false
      },
      m_write_date: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("now()"),
          allowNull: false,
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'message_list'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('message_list');
  }
};
