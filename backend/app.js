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
const Weather = require('./models/weatherModel');


// 1) GLOBAL MIDDLEWARES
app.use(cors())
app.options('*', cors())

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Serving static files
app.use(express.static(`${__dirname}/public`));


// app.get('/', async (req, res) => {
//   const doc = await Weather.find()
//   console.log('hi', doc);

//   res.status(200).json({
//     status: 'success',
//     data: doc
    

//   });
// });

// app.post("/", async (req, res) => {
//   const weatherData = await Weather.create(req.body) 
//   console.log("Received weather data:", weatherData);
//   // You can add your custom logic here to handle the favorite data
//   // For this example, we'll just respond with a success message
//   res.json({ message: "Weather data marked as favorite successfully!" });
// });

app.use('/', weatherRouter);
app.use('/api/v1/favorites', favoritesRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
