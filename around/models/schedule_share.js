'use strict';
module.exports = (sequelize, DataTypes) => {
  const schedule_share = sequelize.define('schedule_share', {
    ss_post_no: {
      field: "ss_post_no",
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    ss_post_title: {
      field: "ss_post_title",
      type: DataTypes.STRING,
      allowNull: false
    },
    ss_post_text: {
      field: "ss_post_text",
      type: DataTypes.TEXT,
      allowNull: false
    },
    ss_writer: {
      type : DataTypes.STRING,
      allowNull : false,
      references: {
        model : 'user',
        key : 'user_nickname' 
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    ss_write_date: {
      field: "ss_write_date",
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("now()"),
      allowNull: false
    },
    ss_post_file: {
      field: "ss_post_file",
      type: DataTypes.STRING,
      unique: true
    },
    ss_region: {
      field: "ss_region",
      type: DataTypes.STRING,
      allowNull: false
    },
    ss_dept_date: {
      field: "ss_dept_date",
      type: DataTypes.DATE,
    },
    ss_hit: {
      field: "ss_hit",
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    ss_post_state: {
      field: "ss_post_state",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ss_board_no: {
      field: "ss_board_no",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'board_info',
        key: 'board_no'
    },
    defaultValue: '2',
    onDelete: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'schedule_share'
  });

  schedule_share.associate = function(models){
    schedule_share.hasMany(models.ss_comment,{
      foreignKey : 'fk_board_no',
      sourceKey : 'ss_post_no'
    })

    schedule_share.hasMany(models.ss_attachment, {
      foreignKey : 'postId',
      sourceKey : 'ss_post_no'
    })
  }

  return schedule_share;
};