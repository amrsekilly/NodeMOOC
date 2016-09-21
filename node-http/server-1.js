var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  console.log('request headers', req.headers);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hey there!</h1>')
});

server.listen(port, hostname, function(){
  console.log('server is running now');
});
