const express = require('express')
const router = express.Router()

router.post('/user/login',(req,res,next) => {
  console.log('req.headers',req.headers)
  res.json({
    status: 0,
    msg: '登录成功'
  })
})

module.exports = router 