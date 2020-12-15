var Module = require('../core/Module');
var Model = require('../core/Model');

var Users = require('./Users');

class Posts extends Model{ 
    constructor(){
        super();
        // this.Posts = super.GetModel('posts');
    }
    async getusers(){
        console.log(await Users.getname());
    }

} 
module.exports = new Posts();