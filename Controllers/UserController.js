//Load module file
var Module = require('../core/Module.js');

var Controller = require('../core/Controller');

class UserController extends Controller{
    async index(req, res){
        try{
            var Users = this.GetModel('users');
            console.log(await Users.getname());
        }
        catch(error){
            console.log(error);
        }
        res.render('Login/register');
    }
}
module.exports = UserController;
