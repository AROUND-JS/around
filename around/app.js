const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);
const fileupload = require('express-fileupload');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const models = require('./models/index');

var indexRouter = require('./routes/index');
var membersRouter = require('./routes/members');
var boardRouter = require('./routes/board/board')

const sequelizeSessionStore = new SessionStore({
  db: models.sequelize,
  ttl : 10
})

const methodOverride = require('method-override');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
//1
app.use(expressSession({
  secret: 'keep it secret, keep it safe.',
  store: sequelizeSessionStore,
  resave: false,
  saveUninitialized: false,
}))


app.use(fileupload());
app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/members', membersRouter);
app.use('/board', boardRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));//err를 발생시키면 err를 매개변수로받는 미들웨어가 바로 실행됨
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
