var http = require("http");

var server = http.createServer();
server.on('request',function(req, res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hello World\n');
});



server.listen('80');
console.log('Server is running!');



