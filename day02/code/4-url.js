/* 
  * Url模块
    * 用于处理url字符串
  * 什么是Url?   
    * url我们称之为统一资源定位符     正名
  * 什么是Uri?
    * uri我们称之为统一资源标识符     别名
  * 作用
    *  它可以快速转换url字符的类型
      * string -> obj 
      * obj -> string   
  * 核心方法
    * parse    将url  string -> obj 
    * format   将url  obj -> string 
*/
const url = require('url')
const { format } = require('path')
const { stringify } = require('querystring')
const urlStr = 'https://detail.tmall.com/item.htm?id=574830978734&ali_refid=a3_420432_1006:1102601813:N:hcfKd/wFd9DV8bxd5wG0n3WPOfX6vPnY:867fa506a56a0a1b66fbb4d551f36186&ali_trackid=1_867fa506a56a0a1b66fbb4d551f36186&spm=a230r.1.14.11'
const urlObj = url.parse(urlStr)
// console.log(urlObj)
console.log(url.format(urlObj))
// url
//     parsr 
//     format
// querystring 
//     parse 
//     stringify