const Note = require('../models/weatherModel');
const factory = require('./handlerFactory');

exports.getNotes = factory.getAll(Note);
// exports.getDailyReport = factory.getOne(Note,{ path: 'user' });
// exports.createDailyReport = factory.createOne(Note);
// exports.updateDailyReport = factory.updateOne(Note);
// exports.deleteDailyReport = factory.deleteOne(Note);