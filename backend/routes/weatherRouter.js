const express = require('express');
const Weather = require('../models/weatherModel');
const handlerFactory = require('../controllers/handlerFactory');

const router = express.Router({ mergeParams: true });

router.route('/').get(handlerFactory.getAll(Weather))
router.route('/:id').get(handlerFactory.getOne(Weather))

module.exports = router;
