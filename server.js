const http = require('http');

http.createServer((req, resp) => {
  resp.write("<h1>This is kushal sahu </h1>")
resp.end("Hello")
}).listen(4800);


// Yes we can create tow server in one file

// http.createServer((req, resp) => {
//   resp.write("<h1>This is kushal sahu </h1>")
// resp.end("Hello")
// }).listen(4900);