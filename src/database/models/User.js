module.exports = (sequelize, DataTypes) => {

    let alias = "Users";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(8),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(60),
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(60),
            allowNull: false
        }

    };

    let config = {
        tablename: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

     // ************ RELATIONS ************ //

    // Category.associate = function (models) {
        
    //     Category.hasMany(models.Products, {   
    //         as: "products",
    //         foreignKey: "category_id"
    //     })
    // }

    return User;
}