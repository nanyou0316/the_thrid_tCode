/*
 * 爬虫： 无非就是使用对应语言的数据请求功能去请求目的地址，然后得到请求内容
 * 然后在通过对应工具去清洗内容，得到你想要的数据
 * 步骤
 *   1. 将整个网站搂过来
 *   2. 使用工具来清洗这个网站   cheerio
 *   3. 通过cheerio可以获得你想要的数据
 *   4. 重新包装，发送给浏览器展示
 */
const http = require("http");
const cheerio = require("cheerio");
const port = 3000;
const host = "10.31.152.45";
const backlog = 200;
const options = {
  hostname: "jx.1000phone.net",
  port: 80,
  path: "/teacher.php/Class/classDetail/param/rqiWlsefmajGmqJhXXWhl3ZjYmRk",
  method: "GET",
  headers: {
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": " gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    Cookie:
      "PHPSESSID=ST-188356-h-xKGjT0HRrJ1z5OLrb8Fk45jiA-izm5ejd5j1npj2pjc7i3v4z",
    Host: "jx.1000phone.net",
    Pragma: "no-cache",
    Referer:
      " http://jx.1000phone.net/teacher.php/Class/index/zone_id/13/course_id/13",
    "Upgrade-Insecure-Requests": 1,
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": 0,
  },
};

http
  .createServer((request, response) => {
    response.writeHead(200,{
      'Content-Type': 'text/html;charset=UTF-8'
    })
    http
      .get(options, (res) => {
        const { statusCode } = res;
        const contentType = res.headers["content-type"];
        // console.log('content-type',contentType)

        let error;
        // 任何 2xx 状态码都表示成功的响应，但是这里只检查 200。
        if (statusCode !== 200) {
          error = new Error("请求失败\n" + `状态码: ${statusCode}`);
        } else if (!/^text\/html/.test(contentType)) {
          error = new Error(
            "无效的 content-type.\n" +
              `期望的是 application/json 但接收到的是 ${contentType}`
          );
        }
        if (error) {
          console.error(error.message);
          // 消费响应的数据来释放内存。
          res.resume();
          return;
        }

        res.setEncoding("utf8");
        let rawData = "";
        res.on("data", (chunk) => {
          rawData += chunk;
        });
        res.on("end", () => {
          try {
            // console.log(rawData);
            const $ = cheerio.load(rawData);
            let html = ''
            $("td.student a").each(function (item) {
              html += `<li style="padding: 15px;">${$(this).text()}</li>`
            });

            response.write(`<ul
              style="width: 500px;display:flex;flex-wrap:wrap;list-style: none;"
            >
              ${html} 
            </ul>`)
            response.end()
          } catch (e) {
            console.error(e.message);
          }
        });
      })
      .on("error", (e) => {
        console.error(`出现错误: ${e.message}`);
      });
  })
  .listen(port, host, backlog, () => {
    console.log(`the server is running at: http://${host}:${port}`);
  });
