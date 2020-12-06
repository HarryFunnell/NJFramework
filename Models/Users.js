//Load module file ../core/Module.js
var Module = require('../core/Module');
var Model = require('../core/Model');

class Users extends Model{

    async getname(){
        var Users = this.GetModel('users');
        console.log(await Users.findAll({
            where:{
                id: 1
            },
            raw: true
        }));
    }

}
module.exports = Users;