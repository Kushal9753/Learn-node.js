const http = require('http')
const arg = process.argv;
const port = arg[2];


http.createServer((req,resp)=>{
  resp.write('this is for testing')
  resp.end()
}).listen(port)
