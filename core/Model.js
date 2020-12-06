//Load module file ../core/Module.js
var Module = require('./Module.js')

class Model{
    constructor() {
        
    }
    GetModel(Models){
        var ModelName;
        ModelName = Models.charAt(0).toUpperCase() + Models.slice(1);
        var ModelFile = require('../Models/Modelsinit/' + ModelName + 'init');
        return ModelFile;
    }
}
module.exports = Model;