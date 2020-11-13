//Load module file ../core/Module.js
var Module = require('./Module.js')

class Controller{
    constructor() {
        
    }
    GetModel(Models){
        var ModelName;
        ModelName = Models.charAt(0).toUpperCase() + Models.slice(1);
        var ModelFile = require('../Models/' + ModelName);
        var Model = new ModelFile(Models);
        return Model;
    }

    UseModel(Models){
        var ModelName;
        ModelName = Models.charAt(0).toUpperCase() + Models.slice(1);
        var ModelFile = require('../Models/Modelsinit/' + ModelName + 'init');
        // var Model = new ModelFile(Models);
        return ModelFile;
    }

    getdate(){
        var datetime = new Date();
        return datetime.toISOString().slice(0,10);
    }
}
module.exports = Controller;