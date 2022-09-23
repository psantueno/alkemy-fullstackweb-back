const express = require("express");
const router = express.Router();


// Controller //
const usersController = require("../controllers/usersController");

router.get('/', usersController.list);


module.exports = router;