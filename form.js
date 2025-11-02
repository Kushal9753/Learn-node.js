const http = require("http");
const fs = require("fs");
const queryString = require('querystring')
http
  .createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "content-type": "text/plain" });

        resp.end("internal server error");

        return;
      }
      resp.writeHead(200, { "content-type": "text/html" });

      if (req.url == "/") {
        resp.write(data);
      } else if (req.url == "/submit") {


        let dataBody=[];


        req.on('data', (chunk)=>{
          dataBody.push(chunk);
        });
        req.on('end', ()=>{
          let rawData = Buffer.concat(dataBody).toString();
          let readableData = queryString.parse(rawData)
          let dataString = "My name is "+readableData.name+ " and my email id is "+readableData.email;
          console.log(dataString);
          // fs.writeFileSync("text/"+readableData.name+".text", dataString);
          // console.log("file created");

          fs.writeFile("text/" + readableData.name + ".text", dataString, 'utf-8', (err)=>{
            if(err){
              resp.end("internal server error")
              return false;
            }else{
              console.log("file created");
            }
          })
          

          
        })
        resp.write("<h1>Data submited</h1>");
      }
      

      resp.end();
    });
  })
  .listen(3200);
