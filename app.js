const express = require('express');
const path = require('path');
const ejs = require('ejs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const politicoRouter = require('./build/server/src/politicoRouter');

const app = express();

app.use(bodyParser.json());
// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// Routes
app.use('/api/v1', politicoRouter);

// Catch 404 and forward to error handler
// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500).send({
    message: err.message,
  });
});
const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console

module.exports = app;
