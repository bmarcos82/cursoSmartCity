var fs = require('fs');
var logger = require('./myModules/logger.js');

var contentsAsync = fs.readFile('textFile.txt');
logger.info("Finalizado readFile"); //esperamos por el resultado
logger.error("Hello!"); //ejecucion bloqueada

var contentsSync = fs.readFileSync('textFile.txt');
logger.info("Finalizado readFileSync"); //esperamos por el resultado
logger.error("Hello!"); //ejecucion bloqueada

