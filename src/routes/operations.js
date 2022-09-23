const express = require("express");
const router = express.Router();

// Controller //
const operationsController = require("../controllers/operationsController");

router.get('/', operationsController.list);


module.exports = router;