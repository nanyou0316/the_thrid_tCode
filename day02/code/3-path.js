/* 
  * path是做什么的呢？
    * 用于获取当前文件的磁盘路径【绝对路径】
    * Node只要使用路径，基本上都是用磁盘路径的
  * path身上的方法    path.join(__dirname,相对路径)
    *  __dirname 是当前文件的磁盘路径
    * 目的： 获取目标文件的磁盘路径
  * 项目经验
    *  我要找一个文件/目录的路径  
*/

const path = require('path')

console.log(path.join(__dirname,'./data/1.txt')) // E:\205\1-Node.js\day02\code\data\1.txt