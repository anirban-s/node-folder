const AppError = require('../utils/appError');

const getDirectory = (req, res) => {
  res.status(200).json({
    message: 'hi',
  });
};

module.exports = {
  getDirectory,
};
