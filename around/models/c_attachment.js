'use strict';
module.exports = (sequelize, DataTypes) => {
    const c_attachment = sequelize.define('c_attachment', {
        originalFileName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        serverFileName : {
            type : DataTypes.STRING,
            primaryKey : true,
            allowNull : false
        },
        size : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        uploadedBy : {
            type : DataTypes.STRING,
            allowNull : false,
            references : {
                model : 'user',
                key : 'user_nickname'
            }
        },
        postId : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : 'companion_board',
                key : 'c_post_no'
            }
        },
        path : {
            type : DataTypes.STRING,
            unique : true, 
            allowNull : false
        },
        state : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        },
        filetype : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
        timestamps : false,
        freezeTableName: true,
        underscore : false,
        tableName: 'c_attachment'
    })

    c_attachment.associate = (models) => {
        c_attachment.belongsTo(models.companion_board, {
            foreignKey : 'postId',
            targetKey : 'c_post_no'
        })
    }

    return c_attachment
}