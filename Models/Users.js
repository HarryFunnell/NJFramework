//Load module file ../core/Module.js
var Module = require('../core/Module');
var Model = require('../core/Model');

class Users extends Model {
    async getname(){
        try{
            var Users = this.UseModel('users');
            console.log(await Users.findAll({raw: true}));
        }
        catch(error){
            console.log(error);
        }
    }
}
module.exports = Users;