//! 为index.html提供一个服务器来展示界面
const express = require('express')
const path = require('path')
const app = express()
const PORT = 9000
const HOST = '10.31.152.45'
//! 指定静态资源文件夹在哪里 
app.use(express.static(path.join(__dirname,'./public')))

app.listen(PORT,HOST,() => {
  console.log(`前端服务器运行在: http://${HOST}:${PORT}`)
})

