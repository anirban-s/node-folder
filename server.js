const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;

// STARTING SERVER
app.listen(port, () => {
  console.log(`The server is up on port ${port}`);
});
