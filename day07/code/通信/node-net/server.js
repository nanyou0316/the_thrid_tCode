const net = require('net');
const server = net.createServer()
const PORT = 9000 
//用于连接客户端
let count = 0
const clients = {}
server.on('connection',(client) => {
  // client就是连接的客户端
  client.name = ++count
  clients[client.name] = client

  // 获取客户端发来的信息的
  client.on('data',msg => {
    console.log('msg',msg.toString())
    broadcast(client,msg.toString())
  })

  // 用来监听客户端的异常下线行为的
  client.on('error',err => {
    console.log(`${client.name}非正常下线`)
  })

  // 监听客户端的正常下线行为
  client.on('close',() => {
    console.log(`客户端${client.name}的状态: 正常下线`)
  })
})

server.listen(PORT,() => {
  console.log('服务器已启动')
})


//! 写一个方法，用于展示客户端持续发来的信息
function broadcast (client,msg) {
  for(let key in clients) {
    client.write(`客户端${client.name}说: ${msg}`)
  }
}