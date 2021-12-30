const dispalyHome = (req, res) => {
  res.send(`<h1>Requested at : ${req.requestTime}</h1>`);
};

module.exports = {
  dispalyHome,
};
