
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

module.exports = middleware;
