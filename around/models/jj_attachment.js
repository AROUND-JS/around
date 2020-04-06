'use strict';
module.exports = (sequelize, DataTypes) => {
    const jj_attachment = sequelize.define('jj_attachment', {
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
                model : 'jj_info_board',
                key : 'jj_post_no'
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
        tableName: 'jj_attachment'
    })

    jj_attachment.associate = (models) => {
        jj_attachment.belongsTo(models.jj_info_board, {
            foreignKey : 'postId',
            targetKey : 'jj_post_no'
        })
    }

    return jj_attachment
}