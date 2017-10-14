var express = require('express');
var app = express();
var port = 1000;

var middleware = {
    requireAuthentication: function(req,res, next){
      console.log('private rout hit!');
      next();
    },
    logger: function(req, res, next){
      console.log('request: '+ req.method + ' ' + new Date().toString() + ' ' +req.originalUrl );
      next();
    }
};

app.use(middleware.logger);

app.get('/about', function(req, res){
  res.send('You know every thing about us!');
});

app.use(express.static(__dirname+'/public'));

app.listen(port, function(){
  console.log('The server open in port '+ port);
});
