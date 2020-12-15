fs = require('fs');
var myArgs = process.argv.slice(2);

var model = "var Module = require('../core/Module'); \nvar Model = require('../core/Model'); \nclass " + myArgs + " extends Model{ \n \n} \nmodule.exports = new " + myArgs +"();";

fs.writeFile('./Models/'+myArgs+'.js',model, (err) => {
    if(err) throw err;
    console.log('Model Created');
});

var init = "const Sequelize = require('sequelize'); \nmodule.exports = sequelize.define('"+ myArgs +"',{ \n \n \n });";

fs.writeFile('./Models/Modelsinit/'+myArgs+'init.js', init, (err) => {
    if(err) throw err;
    console.log('Init Created');
});