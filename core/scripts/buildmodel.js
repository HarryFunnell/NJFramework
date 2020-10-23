fs = require('fs');
var myArgs = process.argv.slice(2);

var controller = "var Module = require('../core/Module.js'); \nvar Model = require('../core/Model'); \nclass " + myArgs + "Model extends Model{ \n \n} \nmodule.exports = " + myArgs + "Model;";

fs.writeFile('./Models/'+myArgs+'Model.js',controller, (err) => {
    if(err) throw err;
    console.log('Model Created');
});