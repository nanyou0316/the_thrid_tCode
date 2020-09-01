// 使用 Mock
var Mock = require('mockjs')
const fs = require('fs')
const path = require('path')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'shopName': /[a-z][A-Z][0-9]/,
        'date|1': [Mock.Random.date('yyyy-MM-dd'),Mock.Random.date('yyyy-MM-dd')],
        'pic|1': [
          Mock.Random.image('200x100', Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
          Mock.Random.image('200x100',Mock.Random.color(), '#FFF', 'png', '!'),
        ],
        'color|1': [
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
          Mock.Random.color(),
        ]
    }]
})
// 输出结果
fs.writeFile(path.join(__dirname,'./list.json'),JSON.stringify(data, null, 4),error => {
  if (error) throw error 
})