/*

If you like run that server, you need install <express> and <body-parser>

*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//var mat = [['cuadro','cuadro','cuadroF'],['cuadroF','cuadro','cuadro']];

var figSA = function()
{
  this.type = 'figSA'; 
  this.matrix = [['cuadro','cuadro','cuadroF'],['cuadroF','cuadro','cuadro'],['linea','empty','empty']];
}

var figSB = function()
{
  this.type = 'figSB'; 
  this.matrix = [['cuadroF','cuadro','cuadro'],['cuadro','cuadro','cuadroF'],['linea','empty','empty']];
}
var cuadrado = function()
{
  this.type = 'cuadrado'; 
  this.matrix = [['cuadro','cuadro','cuadro'],['cuadro','cuadro','cuadro'],['linea','linea','linea'],['cuadro','cuadro','cuadro']];
}

var figLA = function()
{
  this.type = 'figLA'; 
  this.matrix = [['cuadro','cuadro'],['cuadro','cuadroF'],['linea','linea'],['cuadro','cuadroF']];
}

var figLB = function()
{
  this.type = 'figLB'; 
  this.matrix = [['cuadro','cuadro'],['cuadroF','cuadro'],
                 ['linea','linea'],['cuadroF','cuadro']];
}
var figI = function()
{
  this.type = 'figI'; 
  this.matrix = [['cuadro','cuadro','cuadro','cuadro'],['empty','empty']];
}
var myObject = [new figI(),new cuadrado(),new figLA(),new figLB(),new figSA(),new figSB()];
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Content-type', 'text/html');
  res.header('Content-type', 'application/json');
  next();
});
app.get('/tetris', function (req, res) {

  res.send(JSON.stringify(myObject));
});

app.listen(9000);
console.log("Servidor Express escuchando en modo %s", app.settings.env);