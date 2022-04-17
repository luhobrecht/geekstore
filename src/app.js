const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require ("method-override");
const session = require ("express-session");
const recordar = require ("../src/middlewares/recordar");
const locals = require ("../src/middlewares/locals");

const routesProducts = require ("./routes/products");
const routesMain = require ("./routes/main");
const routesUsers = require ("./routes/users");

const app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static((path.join(__dirname, './public'))));
app.use(recordar);
app.use(locals);

app.use("/", routesMain);

app.use("/productos", routesProducts);

app.use("/usuarios", routesUsers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
