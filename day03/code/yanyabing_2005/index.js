/* 
  * 自定义模块
    * 格式; const 变量名 = require(模块的相对路径)
*/
const cookie = require('./utils/cookie.js')
const name = require('./utils/name.js')
const sum = require('./utils/sum.js')

module.exports = {
  cookie,
  name,
  sum
}