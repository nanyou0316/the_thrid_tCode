/* 
  * querystring 专门用于处理字符串
    * querystring.parse(字符串，第一个分隔符，第二个分隔符)
    * querystring.stringify(对象)
*/
const url = require('url')
const qs = require('querystring')
const urlStr = 'https://detail.tmall.com/item.htm?id=574830978734&ali_refid=a3_420432_1006:1102601813:N:hcfKd/wFd9DV8bxd5wG0n3WPOfX6vPnY:867fa506a56a0a1b66fbb4d551f36186&ali_trackid=1_867fa506a56a0a1b66fbb4d551f36186&spm=a230r.1.14.11'

const { query } = url.parse(urlStr)

// console.log((qs.parse(query,'&','='))) 

// console.log(qs.stringify(qs.parse(query,'&','=')))


const str = 'city=北京'
// console.log(qs.escape(str))
// console.log(qs.unescape(qs.escape(str)))




//! 面试题
const obj = {
  a: 1,
  b: 2,
  c: 3
}

const url_str = 'http://localhost:3000'
// 处理成  http://localhost:3000?a=1&b=2&c=3
// console.log(url_str +'?'+ qs.stringify(obj))

function urlHandler(str, obj) {
  // Object.keys(obj)  ['a','b','c']
  let url = ''
  Object.keys(obj).map(item => {
    url += item + '=' + obj[item] + '&'
  })
  return url_str + '?' + url.slice(0, -1)
}
const urlH = urlHandler(url_str, obj)
console.log(urlH)




