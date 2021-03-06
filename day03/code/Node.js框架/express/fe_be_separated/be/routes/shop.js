const express = require('express')
const router = express.Router()

router.get('/shop',(req,res,next) => {
  // res.setHeader('Access-Control-Allow-Origin','*')
  res.json({
    "result": [{
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 3234605,
      "positionName": "天猫/京东运营店长",
      "city": "上海",
      "createTime": "今天 13:06",
      "salary": "10k-15k",
      "companyId": 139645,
      "companyLogo": "i/image/M00/46/C4/Cgp3O1eNooOAIPnLAAAHStAf3gk630.jpg",
      "companyName": "河姆渡电子商务有限公司",
      "companyFullName": "上海河姆渡实业发展有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 3452949,
      "positionName": "助理美术指导/美术指导",
      "city": "广州",
      "createTime": "今天 12:47",
      "salary": "8k-15k",
      "companyId": 43408,
      "companyLogo": "image1/M00/00/6D/CgYXBlTUXYOAPvu_AABFVqRuQwQ635.png",
      "companyName": "原象信息",
      "companyFullName": "广州市原象信息科技有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 2863408,
      "positionName": "软件测试助理",
      "city": "成都",
      "createTime": "今天 12:47",
      "salary": "3k-4k",
      "companyId": 125483,
      "companyLogo": "i/image/M00/3A/E4/CgpEMllIqEyAZRUaAAAOQ1m1G1I677.PNG",
      "companyName": "GARMIN佳明",
      "companyFullName": "成都佳明航电科技有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 4203236,
      "positionName": "Cocos2D-X 游戏开发工程师",
      "city": "深圳",
      "createTime": "今天 12:38",
      "salary": "12k-22k",
      "companyId": 194,
      "companyLogo": "i/image/M00/01/29/Cgp3O1Zha2qAQvjOAAAEPwSIDkI149.png",
      "companyName": "墨齐",
      "companyFullName": "深圳墨齐致知网络科技有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 3409076,
      "positionName": "动画制作实习生",
      "city": "深圳",
      "createTime": "今天 12:38",
      "salary": "3k-5k",
      "companyId": 194,
      "companyLogo": "i/image/M00/01/29/Cgp3O1Zha2qAQvjOAAAEPwSIDkI149.png",
      "companyName": "墨齐",
      "companyFullName": "深圳墨齐致知网络科技有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 3021311,
      "positionName": "新媒体内容编辑",
      "city": "北京",
      "createTime": "今天 12:26",
      "salary": "7k-9k",
      "companyId": 37862,
      "companyLogo": "i/image/M00/14/33/CgpFT1j4IQ2ASeTZAABP5K6o4vU532.jpg",
      "companyName": "GreatSeed",
      "companyFullName": "鼎坤文化传媒（北京）有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 3046604,
      "positionName": "新媒体内容高级编辑",
      "city": "北京",
      "createTime": "今天 12:26",
      "salary": "9k-13k",
      "companyId": 37862,
      "companyLogo": "i/image/M00/14/33/CgpFT1j4IQ2ASeTZAABP5K6o4vU532.jpg",
      "companyName": "GreatSeed",
      "companyFullName": "鼎坤文化传媒（北京）有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 4170434,
      "positionName": "英语编辑",
      "city": "成都",
      "createTime": "今天 12:25",
      "salary": "5k-10k",
      "companyId": 2548,
      "companyLogo": "image1/M00/00/07/CgYXBlTUWAuARSa1AAB9yKFkCRs864.jpg",
      "companyName": "易我科技",
      "companyFullName": "成都易我科技开发有限责任公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 4170652,
      "positionName": "Web前端工程师",
      "city": "武汉",
      "createTime": "今天 12:23",
      "salary": "10k-15k",
      "companyId": 2192,
      "companyLogo": "i/image2/M00/01/B2/CgoB5lm_ZD-APdF2AAA7LgOKNRw823.jpg",
      "companyName": "盛天网络",
      "companyFullName": "湖北盛天网络技术股份有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 4190114,
      "positionName": "产品经理",
      "city": "广州",
      "createTime": "今天 12:21",
      "salary": "10k-20k",
      "companyId": 88092,
      "companyLogo": "i/image/M00/00/26/Cgp3O1YvMOSAR4UjAAAe1CMkC6U832.gif",
      "companyName": "酷麦",
      "companyFullName": "广州酷麦信息科技有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 4245362,
      "positionName": "PHP工程师",
      "city": "广州",
      "createTime": "今天 12:21",
      "salary": "10k-16k",
      "companyId": 88092,
      "companyLogo": "i/image/M00/00/26/Cgp3O1YvMOSAR4UjAAAe1CMkC6U832.gif",
      "companyName": "酷麦",
      "companyFullName": "广州酷麦信息科技有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 3058066,
      "positionName": "客服（天猫/京东）",
      "city": "广州",
      "createTime": "今天 12:17",
      "salary": "5k-8k",
      "companyId": 176217,
      "companyLogo": "i/image/M00/B1/92/Cgp3O1i5KEuAGYSlAABARP98eVw348.jpg",
      "companyName": "哥弟电商中心",
      "companyFullName": "广州哥弟真的好贸易有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 3395774,
      "positionName": "市场专员/Marketing Executive",
      "city": "上海",
      "createTime": "今天 12:11",
      "salary": "7k-10k",
      "companyId": 95570,
      "companyLogo": "image2/M00/05/56/CgqLKVX2iKiAJPCgAAAK5akiHYU213.jpg?cc=0.3393870600208988",
      "companyName": "Neoventure",
      "companyFullName": "上海纽创商务咨询有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 3452073,
      "positionName": "销售代表",
      "city": "上海",
      "createTime": "今天 12:11",
      "salary": "8k-16k",
      "companyId": 95570,
      "companyLogo": "image2/M00/05/56/CgqLKVX2iKiAJPCgAAAK5akiHYU213.jpg?cc=0.3393870600208988",
      "companyName": "Neoventure",
      "companyFullName": "上海纽创商务咨询有限公司"
    }, {
      "logger": {
        "traceCapable": true,
        "name": "com.lagou.entity.mobile.MobilePosition"
      },
      "positionId": 4297427,
      "positionName": "商务专员",
      "city": "西安",
      "createTime": "今天 12:02",
      "salary": "4k-8k",
      "companyId": 329395,
      "companyLogo": "i/image2/M01/B5/97/CgoB5lwKEFyAVAsoAAX-SlmbSS4640.jpg",
      "companyName": "鲸鱼互动",
      "companyFullName": "西安鲸鱼互动信息技术有限公司"
    }]
  })
})

module.exports = router 