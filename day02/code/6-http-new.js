const http = require('http')
const port = 3000
const host = 'localhost'
const backblog = 200

const server = http.createServer((req,res) => {
  /* 
    * req  就是浏览器给我们的
    * res  node给浏览器的
  */
//  通过设置请求头来规定编码方式
 res.writeHead(200,{
   'Content-Type': "text/html;charset=UTF-8"
 })
 res.write('Hello Node.js - 你好')
 res.end()
})

server.listen(port,host,backblog,() => {
  console.log(`The server is running at: http://${host}:${port}`)
})