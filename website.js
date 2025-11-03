const http = require("http");
const fs = require("fs");

http
  .createServer((req, resp) => {

    let collectHeaderData = fs.readFileSync("html/header.html", "utf-8",)


    let file ="/home"
    if(req.url != '/'){
      file = req.url;
    }


    if (req.url != "/style.css") {
      fs.readFile("html"+file+".html", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "Text/plain" });
          resp.end("internal server error ");
          return false;
        }
        // console.log();
        
        resp.write(collectHeaderData+""+data);
        resp.end();
      });
    } else if (req.url == "/style.css") {
      fs.readFile("html/style.css", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "Text/plain" });
          resp.end("css nor found ");
          return false;
        }
        resp.writeHead(200, { "content-type": "Text/css" });

        resp.end(data);
      });
    }
  })
  .listen(3200);
