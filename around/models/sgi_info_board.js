'use strict'

module.exports = (sequelize, DataTypes) => {
    const sgi_info_board = sequelize.define('sgi_info_board', {
        sgi_post_no : {
            field: "sgi_post_no",
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        sgi_post_title : {
            field: "sgi_post_title",
            type : DataTypes.STRING,
            allowNull : false
        },
        sgi_post_text : {
            field: "sgi_post_text",
            type : DataTypes.TEXT,
            allowNUll : false
        },
        sgi_writer : {
            type : DataTypes.STRING,
            allowNull : false,
            references: {
                model : 'user',
                key : 'user_nickname' 
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        sgi_write_date : {
            field: "sgi_write_date",
            type : DataTypes.DATE,
            defaultValue: sequelize.literal('now()')
        },
        sgi_post_file : {
            field: "sgi_post_file",
            type : DataTypes.STRING,
            unique : true
        },
        sgi_hit : {
            field: "sgi_hit",
            type : DataTypes.INTEGER,
            allowNull : true,
            defaultValue : '0'
        },
        sgi_post_state : {
            field: "sgi_post_state",
            type : DataTypes.INTEGER,
            allowNull : true
        },
        sgi_board_no : {
            field: "sgi_board_no",
            type : DataTypes.INTEGER,
            allowNull : true,
            references: {
                model: 'board_info',
                key: 'board_no'
            },
            defaultValue: '3',
            onDelete: 'CASCADE'
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'sgi_info_board'
    })

    sgi_info_board.associate = function(models){
        sgi_info_board.hasMany(models.sgi_comment,{
          foreignKey : 'fk_board_no',
          sourceKey : 'sgi_post_no'
        })

        sgi_info_board.hasMany(models.sgi_attachment, {
            foreignKey : 'postId',
            sourceKey : 'sgi_post_no'
          })
      }

    return sgi_info_board
}