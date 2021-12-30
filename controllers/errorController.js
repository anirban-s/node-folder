const globalErrorHandler = (err, req, res, next) => {
  console.log(err.message);
};

module.exports = globalErrorHandler;
