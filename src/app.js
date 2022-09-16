// ************ LIBRARIES REQUIRE'S ************ //
const express = require('express');
const app = express();

// ************ ROUTERS REQUIRE'S ************ //
const operationsRoutes = require("./src/routes/operationsjs");
const categoriesRoutes = require("./src/routes/categories.js");
const usersRoutes = require("./src/routes/users.js");

// SERVER //
app.listen(3001, () => {
    console.log('API REST running on port 3001');
});

// ROUTES //
app.use('/operations', operationsRoutes);
app.use('/users', usersRoutes);
app.use('/categories', categoriesRoutes);


app.get('/', (req, res) => {
    res.send("WELCOME TO HOME");
});