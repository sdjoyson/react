var express = require("express");
 var app = express();
 var path = require("path");
 var react = require("react");


 var server = app.listen(8000 , function(req,res){

 	var port = server.address().port;

 	console.log('server is running the port http://localhost:'+port);
 })