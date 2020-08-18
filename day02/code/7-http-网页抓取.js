/* 
  * 爬虫： 无非就是使用对应语言的数据请求功能去请求目的地址，然后得到请求内容
  * 然后在通过对应工具去清洗内容，得到你想要的数据
*/
const http = require('http')
http.get('http://59.110.226.77:3000/api/category', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  console.log('content-type',contentType)

  let error;
  // 任何 2xx 状态码都表示成功的响应，但是这里只检查 200。
  if (statusCode !== 200) {
    error = new Error('请求失败\n' +
                      `状态码: ${statusCode}`);
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error('无效的 content-type.\n' +
                      `期望的是 application/json 但接收到的是 ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // 消费响应的数据来释放内存。
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      console.log(rawData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`出现错误: ${e.message}`);
});