var express = require('express');
var app = express();
var port = process.env.PORT||3333;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', function(req, res){
  res.send('You know every thing about us!');
});

//baraye estefade az html
app.use(express.static(__dirname+'/public'));

app.listen(port, function(){
  console.log('The server open in port '+ port);
});
