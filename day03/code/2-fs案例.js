//! 业务：在code目录下生成一个log目录，里面生成10个日志文件，文件中内容任意

const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname,'./log'),error => {
//   if (error) throw error 
//   for(let i = 0;i < 10; i++) {
//     fs.writeFile(path.join(__dirname,`./log/log${i}.txt`),i,err => {
//       if (err) throw err
//     })
//   } 
// })
//! 业务：在code目录下有一个log目录，我要删除它
function deleteDir(pathUrl) {
  fs.rmdir(pathUrl, error => {
    if (error) throw error
  })
}
function removeDir(pathUrl) {
  fs.readdir(pathUrl, (error, files) => {
    if (files.length == 0) {
      deleteDir(pathUrl)
    }
    for (let i = 0; i < files.length; i++) {
      fs.unlink(`${pathUrl}/${files[i]}`, err => {
        if (err) throw err
      })
    }
    deleteDir(pathUrl)
  })
}

removeDir(path.join(__dirname, './log'))