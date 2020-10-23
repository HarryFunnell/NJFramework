//Load module file
var Module = require('../core/Module.js')

var Controller = require('../core/Controller');

class HomeController extends Controller{
    index(req, res){
        // console.log('Home Page');
        res.render('Home/home');
    }
}
module.exports = HomeController;