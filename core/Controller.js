//Load module file ../core/Module.js
var Module = require('./Module.js')

class Controller{
    constructor() {
        
    }
    GetModel(Models){
        var ModelName;
        ModelName = Models.charAt(0).toUpperCase() + Models.slice(1);
        var ModelFile = require('../Models/' + ModelName);
        return ModelFile;
        // var Model = new ModelFile(Models);
        // return Model;
    }

    getdate(){
        var datetime = new Date();
        return datetime.toISOString().slice(0,10);
    }
}
module.exports = Controller;