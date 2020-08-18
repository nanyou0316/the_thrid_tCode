/* 
  * fs
    * 作用： 用代码来操作文件夹和文件
    * 带有Sync的操作表示是主线程操作，是同步操作，没有带的表示异步操作
    * 讲解思路
    * 文件操作 - CURD
      * 生成文件  writeFile(生成文件存放路径，往文件中添加的数据,错误优先的回调函数)/writeFile带有Sync的操作表示是主线程操作，是同步操作，没有带的表示异步操作    
    * 文件夹操作 - CURD
*/
const fs = require('fs')
const path = require('path')
//! 文件
//* 文件的生成
// fs.writeFile(path.join(__dirname,'./log/log1.txt'),'Hello Node.js',err => {
//   if (err){
//     throw err
//   } else {
//     console.log('写入成功')
//   }
// })


// fs.writeFileSync(path.join(__dirname,'./log/log2.txt'),'Hello 2005')

//* 文件删除
// fs.unlink(path.join(__dirname,'./log/log2.txt'),err => {
//   if (err) throw err
// })

//* 文件修改
// fs.writeFile(path.join(__dirname,'./log/log1.txt'),'Hello Node.js - 1221212121 \n',{
//   flag: 'a' // a表示新增   w表示覆盖
// },err => {
//   if (err){
//     throw err
//   } else {
//     console.log('写入成功')
//   }
// })

//! 文件查询
fs.readFile(path.join(__dirname, './log/log1.txt'), {
  encoding: 'utf-8'
}, (err, data) => {
  if (err) throw err
  // console.log('data',data.toString())
  console.log('data', data)
})




//! 文件夹