'use strict';
module.exports = (sequelize, DataTypes) => {
  const companion_board = sequelize.define('companion_board', {
    c_post_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    c_post_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    c_post_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    c_writer: {
      type : DataTypes.STRING,
      allowNull : false,
      references: {
          model : 'user',
          key : 'user_nickname' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    c_write_date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("now()"),
        allowNull: false
    },
    c_post_file: {
        type: DataTypes.STRING,
        unique: true
    },
    c_region: {
        type: DataTypes.STRING,
        allowNull: false
    },
    c_dept_date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    c_hit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
    },
    c_post_state: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    c_board_no: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
          model : 'board_info',
          key : 'board_no' 
        },
        defaultValue: '1',
        onDelete: 'CASCADE'
    }
  }, {
    timestamps : false,
    freezeTableName: true,
    tableName: 'companion_board'
  });

  companion_board.associate = function(models){
    companion_board.hasMany(models.c_comment,{
      foreignKey : 'fk_board_no',
      sourceKey : 'c_post_no'
    })
  }

  return companion_board;
};