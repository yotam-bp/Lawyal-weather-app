const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const globalErrorHandler = require('./controllers/errorController');
const favoritesRouter = require('./routes/favoritesRoutes');
const weatherRouter = require('./routes/weatherRouter');
const cors = require('cors')
const app = express();

app.use(cors())
app.options('*', cors())

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));

app.use(mongoSanitize());

app.use(xss());

app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/weather', weatherRouter);
app.use('/api/v1/favorites', favoritesRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
