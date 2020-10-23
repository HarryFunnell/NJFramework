//Load module file
var Module = require('../core/Module.js')

var Model = require('../core/Model');

class UsersModel extends Model{
    getname(){
        var results;
        results = this.Modelname
        console.log(results);
    }
    async getalldata(){
        var results;
        results = await this.QueryAll();
        return results;
        // console.log(results);
    }
}
module.exports = UsersModel;