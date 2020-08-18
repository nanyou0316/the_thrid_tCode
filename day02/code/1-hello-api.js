//! 引入内置api      
//! 内置模块引入格式   const 变量名 = require(api名称)
//! 前端框架方面，基本使用的是const来定义对象。。。。      
const dns = require('dns');

//! 方法
dns.lookup('web-yyb.top', (err, address, family) => {
  console.log('地址: %j 地址族: IPv%s', address, family);
});
// 地址: "93.184.216.34" 地址族: IPv4