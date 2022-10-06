const express = require("express");
const router = express.Router();


// Controller //
const usersController = require("../controllers/usersController");

// Middlewares //
const validateRegister = require("../middlewares/validateRegister")

router.get('/', usersController.list);

router.post('/register', validateRegister, usersController.register);


module.exports = router;