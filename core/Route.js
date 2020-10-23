class Route{
    async Use(req, res, next,CA){

        var Controller = CA.Controller;
        var Action = CA.Action;
        var controllers;
        
        var UseController = require('../Controllers/' + Controller + 'Controller');
        controllers = new UseController();
        controllers[Action](req, res, next);
    }
}
module.exports = Route;