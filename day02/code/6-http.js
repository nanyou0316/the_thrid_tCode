/* 
  * 目的： 使用Node.js 的http模块来创建一个服务器
*/

const http = require('http')
const port = '3000'
const host = 'localhost'
const backlog = 200
http.createServer((req,res) => {
  /* 
    * req  request    表示请求     我求你帮我办件事     前端给后端
    * res  response   表示响应     我给你一巴掌         后端给前端的
  */
  res.write('Hello world')
  res.end() // 表示结束了
}).listen(port,host,backlog,() => {
  console.log(`服务器运行在： http://${host}:${port}`)
})



