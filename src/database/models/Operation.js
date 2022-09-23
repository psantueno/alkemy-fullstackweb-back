module.exports = (sequelize, DataTypes) => {

    let alias = "Operations";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        kind: {
            type: DataTypes.STRING(7),
            allowNull: false
        },

        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tablename: 'operations',
        timestamps: true
    }

    const Operation = sequelize.define(alias, cols, config);

     // ************ RELATIONS ************ //

    // Category.associate = function (models) {
        
    //     Category.hasMany(models.Products, {   
    //         as: "products",
    //         foreignKey: "category_id"
    //     })
    // }

    return Operation;
}