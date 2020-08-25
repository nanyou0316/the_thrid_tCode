const express = require('express')
const router = express.Router()
const {checkToken} = require('../utils/token')
router.get('/check-token',async (req,res,next) => {
   //get请求   req.query 
   const {token} = req.headers
   const {status,msg} = await checkToken(token)
   res.json({
     status,msg
   })
})

module.exports = router 