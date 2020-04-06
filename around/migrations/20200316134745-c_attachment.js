"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("c_attachment",
      {
        originalFileName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        serverFileName: {
          type: Sequelize.STRING,
          primaryKey : true,
          allowNull: false
        },
        size: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        uploadedBy: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: "user",
            key: "user_nickname"
          }
        },
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "companion_board",
            key: "c_post_no"
          }
        },
        path: {
          type: Sequelize.STRING,
          primaryKey : true,
          allowNull: false
        },
        state: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: 1
        },
        filetype : {
          type : Sequelize.STRING,
          allowNull : false
        }
      },
      {
        timestamps : false,
        freezeTableName: true,
        underscore : false,
        tableName: "c_attachment"
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("c_attachment");
  }
};
