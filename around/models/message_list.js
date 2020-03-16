'use strict';
module.exports = (sequelize, DataTypes) => {
  const message_list = sequelize.define('message_list', {
    m_user_no: {
      field: "m_user_no",
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model : 'user',
        key : 'user_no' 
      },
      onDelete: 'CASCADE'
    },
    correspondent_no: {
      field: "correspondent_no",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model : 'user',
        key : 'user_no' 
      },
      onDelete: 'CASCADE'
    },
    m_text: {
      field: "m_text",
      type: DataTypes.TEXT,
      allowNull: false
    },
    m_write_date: {
      field: "m_write_date",
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("now()"),
      allowNull: false,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'message_list'
  });
  return message_list;
};