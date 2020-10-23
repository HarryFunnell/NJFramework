fs = require('fs');
var myArgs = process.argv.slice(2);

var controller = "var Module = require('../core/Module.js'); \nvar Controller = require('../core/Controller'); \nclass " + myArgs + "Controller extends Controller{ \n \n} \nmodule.exports = " + myArgs + "Controller;";

fs.writeFile('./Controllers/'+myArgs+'Controller.js',controller, (err) => {
    if(err) throw err;
    console.log('Controller Created');
});