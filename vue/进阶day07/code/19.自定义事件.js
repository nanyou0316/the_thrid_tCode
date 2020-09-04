//node.js是没有dom，bom的，那么我们也要完成事件驱动的
// 自定义事件
const events = require('events')
const store = events.EventEmitter.prototype
// store.on(事件名,事件处理程序)
// store.emit('事件名)

store.on('aa',function (n) {
  console.log('aa执行' + n )
})
store.emit('aa',10)