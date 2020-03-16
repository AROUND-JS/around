'use strict';
module.exports = (sequelize, DataTypes) => {
  const jl_comment = sequelize.define('jl_comment', {
    jl_comment_no: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull: false
    },
    jl_comment_writer : {
        type:DataTypes.STRING,
        allowNull : false,
        references : {
            model:"user",
            key: "user_nickname"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    jl_comment_text : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    jl_comment_write_date : {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('now()')
    },
    jl_comment_state : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    fk_board_no : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model:"jl_info_board",
            key : "jl_post_no"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'jl_comment'
  });


  jl_comment.associate = function(models){
    jl_comment.belongsTo(models.jl_info_board,{
      foreignKey : 'fk_board_no',
      targetKey : 'jl_post_no',
    })
  }

  return jl_comment;
};