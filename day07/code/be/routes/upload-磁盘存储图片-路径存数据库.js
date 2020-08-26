const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/upload'))
  },
  filename: function (req, file, cb) {
    //suffix 图片后缀
    const suffix = file.originalname.slice(file.originalname.indexOf('.'))
    //生成public里面的图片文件名字
    const fileName = file.fieldname + '-' + Date.now() + suffix
    req.fileName = fileName
    cb(null, fileName)
  }
})
var upload = multer({
  storage: storage
})

router.post('/upload', upload.any(), (req, res, next) => {
  // console.log('post请求用',req.fileName)
  res.json({
    status: 1,
    msg: '文件上传成功',
    pic: req.fileName
  })
})


module.exports = router