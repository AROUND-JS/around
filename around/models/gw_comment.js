'use strict';
module.exports = (sequelize, DataTypes) => {
  const gw_comment = sequelize.define('gw_comment', {
    gw_comment_no: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull: false
    },
    gw_comment_writer : {
        type:DataTypes.STRING,
        allowNull : false,
        references : {
            model:"user",
            key: "user_nickname"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    gw_comment_text : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    gw_comment_write_date : {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    gw_comment_state : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    fk_board_no : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model:"gw_info_board",
            key : "gw_post_no"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'gw_comment'
  });


  gw_comment.associate = function(models){
    gw_comment.belongsTo(models.gw_info_board,{
      foreignKey : 'fk_board_no',
      targetKey : 'gw_post_no',
    })
  }

  return gw_comment;
};