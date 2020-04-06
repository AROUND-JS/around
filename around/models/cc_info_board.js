'use strict'

module.exports = (sequelize, DataTypes) => {
    const cc_info_board = sequelize.define('cc_info_board', {
        cc_post_no : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        cc_post_title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        cc_post_text : {
            type : DataTypes.TEXT,
            allowNUll : false
        },
        cc_writer : {
            type : DataTypes.STRING,
            allowNull : false,
            references: {
                model : 'user',
                key : 'user_nickname' 
              },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        cc_write_date : {
            type : DataTypes.DATE,
            defaultValue: sequelize.literal('now()')
        },
        cc_post_file : {
            type : DataTypes.STRING,
            unique : true
        },
        cc_hit : {
            type : DataTypes.INTEGER,
            allowNull : true,
            defaultValue : '0'
        },
        cc_post_state : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        cc_board_no : {
            type : DataTypes.INTEGER,
            allowNull : true,
            references: {
                model: 'board_info',
                key: 'board_no'
            },
            defaultValue: '5',
            onDelete: 'CASCADE'
        }
    }, 
    {   
        timestamps: false,
        freezeTableName: true,
        tableName: 'cc_info_board'
    })


    cc_info_board.associate = function(models){
        cc_info_board.hasMany(models.cc_comment,{
          foreignKey : 'fk_board_no',
          sourceKey : 'cc_post_no'
        })

        cc_info_board.hasMany(models.cc_attachment, {
            foreignKey : 'postId',
            sourceKey : 'cc_post_no'
          })
      }

    return cc_info_board
}