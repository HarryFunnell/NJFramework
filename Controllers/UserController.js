//Load module file
var Module = require('../core/Module.js');

var Controller = require('../core/Controller');

class UserController extends Controller{
    async index(req, res){
        try{
            // var Users = this.GetModel('users');
            // console.log(await Users.getname());

            var Posts = this.GetModel('posts');
            console.log(await Posts.getusers());
        }
        catch(error){
            console.log(error);
        }
        res.render('Login/register');
    }
}
module.exports = UserController;
