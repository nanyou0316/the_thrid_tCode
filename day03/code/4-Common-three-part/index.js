/* 
  * 入口文件：项目中优先执行的那个文件，其他文件依赖于它执行
    * 第三方库引入格式： const 变量名 = require(模块名)
    * 第三方库的使用方式： https://www.npmjs.com 通过模块名找
*/

const md5 = require('md5')

const paasword = 'yyb123456789'

const result = md5(paasword)
console.log(result)