const express = require('express');
const morgan = require('morgan');

const viewRoutes = require('./routes/viewRoutes');
const apiRoutes = require('./routes/apiRoutes');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/view/', viewRoutes);
app.use('/api/', apiRoutes);

app.all('*', (req, res) => {
  throw new AppError('This route is not defined');
});

app.use(globalErrorHandler);

module.exports = app;
