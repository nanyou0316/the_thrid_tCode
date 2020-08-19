var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop')

var app = express();

// view engine setup
// 指定模板文件的路径在views文件夹
app.set('views', path.join(__dirname, 'views'));
// 指定模板渲染引擎是ejs
app.set('view engine', 'ejs');


app.use(logger('dev')); // 日志记录
app.use(express.json()); // post请求的json格式处理
app.use(express.urlencoded({ extended: false }));//post请求的表单提交处理
app.use(cookieParser()); // 格式化cookie
app.use(express.static(path.join(__dirname, 'public')));//指定静态资源目录是谁

// 创建路由 - 路由中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop',shopRouter)

// 处理报错 - 错误中间件
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
