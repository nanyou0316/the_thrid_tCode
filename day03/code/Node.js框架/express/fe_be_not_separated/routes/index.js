var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //! render表示渲染编译，将index.ejs编译为index.html
  //! render函数第一个参数表示编译的目标文件，第二个参数表示数据[数据库中提取出来的]
  res.render('index', { title: 'Express',name: '兵哥' });
});

module.exports = router;
