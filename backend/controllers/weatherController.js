const Weather = require('../models/weatherModel');
const handlerFactory = require('../controllers/handlerFactory');

exports.getLocationsWeather = handlerFactory.getAll(Weather)
exports.getSingleWeather = handlerFactory.getOne(Weather)