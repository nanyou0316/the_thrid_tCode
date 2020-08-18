const events = require('events')

// 自定义事件

const myEvent = events.EventEmitter.prototype
// console.log(myEvent)

// 通过on来声明一个事件   on(事件名，事件处理程序)
myEvent.on('aa',(n) => {
  console.log('aa' + n)
})
// 通过emit可以触发一个事件 emit(事件名，参数)
myEvent.emit('aa',10)