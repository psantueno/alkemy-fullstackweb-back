// ************ LIBRARIES REQUIRE'S ************ //
const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const Sequelize = require("sequelize");


// ************ ROUTERS REQUIRE'S ************ //
const operationsRoutes = require("../src/routes/operations.js");
const categoriesRoutes = require("../src/routes/categories.js");
const usersRoutes = require("../src/routes/users.js");


// SERVER //
app.listen(3001, () => {
    console.log('API REST running on port 3001');
});


// CONFIG FOLDER PUBLIC //
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
// METHODS PUT AND DELETE //
app.use(methodOverride('_method'));


// ROUTES //
app.use('/operations', operationsRoutes);
app.use('/users', usersRoutes);
app.use('/categories', categoriesRoutes);


app.get('/', (req, res) => {
    res.send("WELCOME TO HOME");
});