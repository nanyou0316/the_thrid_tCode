const fs = require('fs')
const path = require('path')
//! 目录生成
// fs.mkdir(path,options?,errorCallBack)

// fs.mkdir(path.join(__dirname,'./log'),error => {
//   if (error) throw error 
// })

//! 目录删除
// fs.rmdir(path.join(__dirname,'./log'),error => {
//   if (error) throw error 
// })

//! 目录修改 - 重命名
// fs.rename(
//   path.join(__dirname,'./log'),
//   path.join(__dirname,'./data'),
//   error => {
//   if (error) throw error
// })
//查目录下面的文件
// fs.readdir(path.join(__dirname,'../code'),(error,files) => {
//   if (error) throw error 
//   console.log('files',files)//[ '1-fs-目录操作.js', 'data' ]
// })