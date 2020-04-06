'use strict';
module.exports = (sequelize, DataTypes) => {
    const jl_attachment = sequelize.define('jl_attachment', {
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
                model : 'jl_info_board',
                key : 'jl_post_no'
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
        tableName: 'jl_attachment'
    })

    jl_attachment.associate = (models) => {
        jl_attachment.belongsTo(models.jl_info_board, {
            foreignKey : 'postId',
            targetKey : 'jl_post_no'
        })
    }

    return jl_attachment
}