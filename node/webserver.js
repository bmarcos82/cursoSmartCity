var http  = require('http');
var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hola Mundo");
	response.end();
	console.log("Response send");
});


server.listen(9000);
console.log("Server is listening");