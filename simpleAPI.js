const http = require('http')
const usersData =[

  {
    name:'kushal',
    age:20,
    email:'kushal@test.com'
  },
  {
    name:'sam',
    age:30,
    email:'sam@test.com'
  },
  {
    name:'peter',
    age:40,
    email:'peter@test.com'
  },
]
http.createServer((req, resp)=>{

  resp.setHeader("Content-Type", 'application/JSON')
  resp.write(JSON.stringify(usersData));
  resp.end()
}).listen(6100)