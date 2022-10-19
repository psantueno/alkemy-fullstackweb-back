const express = require("express");
const router = express.Router();


// Controller //
const usersController = require("../controllers/usersController");

// Middlewares //
const validateRegister = require("../middlewares/validateRegister");
const validateLogin = require("../middlewares/validateLogin");

// ROUTES //
router.get('/', usersController.list);

router.post('/register', validateRegister, usersController.register);

router.post('/login', validateLogin, usersController.login);


module.exports = router;