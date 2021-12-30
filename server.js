const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// GLOBAL ERROR HANDLER FOR UNCAUGHT EXCEPTIONS
process.on('uncaughtException', (err) => {
  console.log('UNEXCEPTION! Shutting down the server....');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');

const port = process.env.PORT || 3000;

// STARTING SERVER
const server = app.listen(port, () => {
  console.log(`The server is up on port ${port}`);
});

// GLOBAL ERROR HANDLER FOR UNHANDLED REJECTIONS
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTED PROMISES! Shutting down the server....');
  // Shutting the server gracefully on unhandled rejection.
  server.close(() => {
    process.exit(1);
  });
});
