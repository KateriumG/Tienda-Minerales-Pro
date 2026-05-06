const express = require('express');
const router = express.Router();
const controller = require('../controllers/typesController');

router.get('/', controller.getAll);

module.exports = router;