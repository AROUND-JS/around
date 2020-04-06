'use strict';
module.exports = (sequelize, DataTypes) => {
  const cc_comment = sequelize.define('cc_comment', {
    cc_comment_no: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull: false
    },
    cc_comment_writer : {
        type:DataTypes.STRING,
        allowNull : false,
        references : {
            model:"user",
            key: "user_nickname"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    cc_comment_text : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    cc_comment_write_date : {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    cc_comment_state : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    fk_board_no : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model:"cc_info_board",
            key : "cc_post_no"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'cc_comment'
  });


  cc_comment.associate = function(models){
    cc_comment.belongsTo(models.cc_info_board,{
      foreignKey : 'fk_board_no',
      targetKey : 'cc_post_no',
    })
  }

  return cc_comment;
};