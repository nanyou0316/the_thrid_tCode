const WebSocket = require('ws')
const server = new WebSocket.Server({
  port: 5000,
  host: '10.31.152.45'
})

let count = 0
const clients = {}
server.on('connection',client=> {
  client.name = ++count 
  clients[client.name] = client 
  client.on('message',msg => {
    console.log(`客户端${client.name}说: ${msg}`)
    // client.on()
    //! 广播
    broadcast( client.name + ':' +msg)
  })
  client.on('error',error=> {
    // alt + 键盘上下键
    // shift + alt + 键盘上下键
    // 双击是选中当前单词
    if (error) {
      console.log(error.message)
    }
  })
  client.on('close',() => {
    console.log(`客户端${client.name}的状态: 正常下线`)
    delete clients[client.name]
  })
})


function broadcast (msg) {
  for(let key in clients) {
    clients[key].send(msg)
  }
}