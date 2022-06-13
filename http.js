const http = require ('http')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end('<h1>Hello node js u r beauty !!!!!!!</h1>')
})

server.listen(4040,()=>{
    console.log('Server is Running on PORT 4040');
});