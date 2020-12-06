class Route{
    Use(req, res,CA){

        var Controller = CA.Controller;
        var Action = CA.Action;
        var Middleware = CA.Middleware;
        var controllers;
        var useMiddleWare;
        
        if(Middleware){
            var Middlesplit = [];
            Middlesplit = Middleware.split(" ")
            Middlesplit.forEach(element => {
                try{
                    var MiddleUse = require('../Middleware/' + element);
                    useMiddleWare = new MiddleUse();
                    useMiddleWare.handler(req, res);
                }
                catch(error){
                    return error;
                }
            });
        }
        else{

        }

        var UseController = require('../Controllers/' + Controller + 'Controller');
        controllers = new UseController();
        controllers[Action](req, res);
    }
}
module.exports = Route;