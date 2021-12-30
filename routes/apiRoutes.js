const express = require('express');

const apiController = require('../controllers/apiController');

const router = express.Router();

// router.param("id", (req, res, next, val) => {
//   console.log(`The Id is ${val}`);
//   next();
// });

router.get('/', apiController.getDirectory);

module.exports = router;
