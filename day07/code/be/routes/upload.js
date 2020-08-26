const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const db = require('../db')
//设置图片存放路径
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/upload'))
  },
  filename: function (req, file, cb) {
    console.log('file:', file);
    //设置图片文件名
    const fileName = file.fieldname + '-' + Date.now()
    //把fileName设置成req的属性，其他地方有req的可以使用fileName的值
    req.fileName = fileName
    cb(null, fileName)
  }
})
var upload = multer({
  storage: storage
})

router.post('/upload', upload.any(), async (req, res, next) => {
  // console.log('post请求用',req.fileName)
  const file = fs.readFileSync(path.join(__dirname, '../public/upload/' + req.fileName))
  console.log('file', file)
  //! 数据库操作,将二进制存入数据库
  const {
    status,
    msg
  } = await db.file.add({
    file
  })
  res.send({
    status,
    msg,
    file
  })
})


module.exports = router