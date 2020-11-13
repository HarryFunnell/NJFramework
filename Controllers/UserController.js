//Load module file
var Module = require('../core/Module.js');

var Controller = require('../core/Controller');

class UserController extends Controller{
    async index(req, res, next){
        try{
            var getUsers = this.GetModel('users');
            // var useUsers = this.UseModel('users');
            console.log(await getUsers.getname());
            // console.log(await useUsers.findAll({raw: true}));
        }
        catch(error){
            console.log(error);
        }
        res.render('Login/register');
    }
}
module.exports = UserController;
