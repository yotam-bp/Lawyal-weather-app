const Weather = require('../models/weatherModel');
const handlerFactory = require('./handlerFactory');

exports.getFavoriteLocations = handlerFactory.getAll(Weather, {favorite:true})
exports.updateFavorite = handlerFactory.updateOne(Weather)