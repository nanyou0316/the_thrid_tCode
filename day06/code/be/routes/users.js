const express = require('express')
const router = express.Router()
const db = require('../db')
const {createToken,checkToken} = require('../utils/token')
router.post('/user/register',async (req,res,next) => {
  // req.body
  const { status,msg } = await db.users.register(req.body)
  res.json({
    status,
    msg
  })
})

router.post('/user/login',async (req,res,next) => {
  console.log('req',req.headers.token)
  let token = ''
  if (req.headers.token) {
    // 已经登录过了
    //  console.log('11111111111111111111111')
     const {status,msg} =  await checkToken(req.headers.token)
      res.json({
      status,msg
    })
  } else {
    // 还没有登录或者登录过期了，需要登录
    token = createToken({
      username: req.body.loginName
      // time: Date.now()
    })
  }
  const {status,msg,pic} = await db.users.login(req.body)
  res.json({
    status,
    msg,
    root: 'user',
    pic,
    token
  })
})

module.exports = router 