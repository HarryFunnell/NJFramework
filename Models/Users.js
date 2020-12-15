//Load module file ../core/Module.js
var Module = require('../core/Module');
var Model = require('../core/Model');

class Users extends Model{
    constructor(){
        super();
        this.Users = super.GetModel('users');
    }
    
    async getname(){
        return await this.Users.findAll({
            where:{
                id: 2
            },
            raw: true
        });
    }

}

module.exports = new Users();

