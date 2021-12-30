const express = require('express');

const viewController = require('../controllers/viewController');

const router = express.Router();

router.get('/', viewController.dispalyHome);

module.exports = router;
