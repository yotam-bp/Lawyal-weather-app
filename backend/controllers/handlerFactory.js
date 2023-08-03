const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    console.log(req.params.id, req.body,);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

  exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
   
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data:[doc]
    });
  });


exports.getAll = (Model, filter) =>
  catchAsync(async (req, res, next) => {

    const doc = await Model.find(filter)
    console.log(req.params);

    if (doc.length === 0) {
      return next(new AppError('Could not found what you are looking for', 404));
    }

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: doc
    });
  });
