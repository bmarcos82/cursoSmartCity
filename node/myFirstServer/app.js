var express = require('express');
var myLogger = require('../myModules/logger.js');
var app = express();

numPeticiones = 0;

function registro (req,res,next){
	console.log("Se ha realizado una petición");
	numPeticiones = numPeticiones +1;
	console.log("Num total de peticiones: ", numPeticiones);
	next();
}

app.get('/hola',registro,function(req,res){
	res.send("Hello World");
});

app.listen(9000,function(){
	console.log('listening on port 9000!')
});