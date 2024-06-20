const express = require('express');
require('dotenv').config();
const cors = require('cors');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const Router = require('./routes/router');

const app = express();
const Port = process.env.PORT || 8000;

app.use(cors(
  // {
  //   origin: "http://localhost:5500"
  // }
));
app.use(express.json());

// middlewares
app.use('/api/v1/items', Router);
app.use(notFound);
app.use(errorHandler);

//start server
const start = () => {
  app.listen(Port, () => {
    console.log(`Server is running on ${Port}`);
  });
};

start();
