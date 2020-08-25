const express = require('express')
const router = express.Router()
const db = require('../db/index')
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
    const { status, msg } = await db.shop.add(req.body)
    res.json({
      status,
      msg
    })
  })
  .delete(async (req, res, next) => {
    // console.log('req',req.body)
    const { _id } = req.body
    const { status, msg } = await db.shop.del(_id)
    res.json({
      status,
      msg
    })
  })
  .put(async (req, res, next) => {
    const { status, msg, data } = await db.shop.update(req.body)
    res.json({
      status,
      msg,
      data
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