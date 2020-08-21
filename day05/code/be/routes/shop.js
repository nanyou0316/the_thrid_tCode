const express = require('express')
const router = express.Router()
const db = require('../db')
//! 旧做法
// router.get('/shop/add',(req,res,next) => {})
// router.get('/shop/del',(req,res,next) => {})
// router.get('/shop/update',(req,res,next) => {})
// router.get('/shop/find',(req,res,next) => {})
//! 新做法  对接口打造做了一个规范： resetful api
//! 要求： 一个数据请求对一个一个功能，接口只有一个
//! get表示查询  post请求表示新增  put请求表示修改  delete表示删除

router
  .route('/shop')
  .post(async (req, res, next) => {
    // post请求 后端得到前端的请求数据用req.body
    // console.log(req.body);
    //得到与数据库匹配的结果
    const { status, msg } = await db.shop.add(req.body)
    res.json({
      status,
      msg
    })
  })

  .delete((req, res, next) => {
    res.json({
      status: 1,
      msg: '请求成功'
    })
  })
  .put((req, res, next) => {
    res.json({
      status: 1,
      msg: '请求成功'
    })
  })
  .get(async (req, res, next) => {
    const { msg, status, data } = await db.shop.query()
    res.json({
      status,
      msg,
      data
    })
  })




module.exports = router 