require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

//setting up Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const charitiesRouter = require('./routes/charities');
const pledgesRouter = require('./routes/pledges')
// const dashboardRouter = require('./routes/dashboard')
// const avatarsRouter = require('.routes/avatars')
// const kidsRouter = require('.routes/kids')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(express.static('public'))

app.use('/', indexRouter);
app.use('/charities', charitiesRouter)
app.use('/users', usersRouter);
// app.use('/avatars', avatarsRouter)
// app.use('/kids', kidsRouter)
app.use('/pledges', pledgesRouter)

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

module.exports = app
