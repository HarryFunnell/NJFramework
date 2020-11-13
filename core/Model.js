class Model{
    constructor(Modelname) {
        this.Modelname = Modelname;
        // this.ModelLoad();
    }
    UseModel(Models){
        var ModelName;
        ModelName = Models.charAt(0).toUpperCase() + Models.slice(1);
        var ModelFile = require('../Models/Modelsinit/' + ModelName + 'init');
        return ModelFile;
    }
}
module.exports = Model;