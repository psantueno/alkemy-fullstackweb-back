module.exports = (sequelize, DataTypes) => {

    let alias = "Categories";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(18),
            allowNull: false
        },

    };

    let config = {
        tablename: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

     // ************ RELATIONS ************ //

    // Category.associate = function (models) {
        
    //     Category.hasMany(models.Products, {   
    //         as: "products",
    //         foreignKey: "category_id"
    //     })
    // }

    return Category;
}