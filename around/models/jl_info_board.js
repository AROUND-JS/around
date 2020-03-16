'use strict'

module.exports = (sequelize, DataTypes) => {
    const jl_info_board = sequelize.define('jl_info_board', {
        jl_post_no : {
            field: "jl_post_no",
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        jl_post_title : {
            field: "jl_post_title",
            type : DataTypes.STRING,
            allowNull : false
        },
        jl_post_text : {
            field: "jl_post_text",
            type : DataTypes.TEXT,
            allowNUll : false
        },
        jl_writer : {
            type : DataTypes.STRING,
            allowNull : false,
            references: {
                model : 'user',
                key : 'user_nickname' 
              },
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
        },
        jl_write_date : {
            field: "jl_write_date",
            type : DataTypes.DATE,
            defaultValue: sequelize.literal('now()')
        },
        jl_post_file : {
            field: "jl_post_file",
            type : DataTypes.STRING,
            unique : true
        },
        jl_hit : {
            field: "jl_hit",
            type : DataTypes.INTEGER,
            allowNull : true,
            defaultValue : '0'
        },
        jl_post_state : {
            field: "jl_post_state",
            type : DataTypes.INTEGER,
            allowNull : true
        },
        jl_board_no : {
            field: "jl_board_no",
            type : DataTypes.INTEGER,
            allowNull : true,
            references: {
                model: 'board_info',
                key: 'board_no'
            },
            defaultValue : '6',
            onDelete: 'CASCADE'
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'jl_info_board'
    })

    jl_info_board.associate = function(models){
        jl_info_board.hasMany(models.jl_comment,{
          foreignKey : 'fk_board_no',
          sourceKey : 'jl_post_no'
        })
      }



    return jl_info_board
}