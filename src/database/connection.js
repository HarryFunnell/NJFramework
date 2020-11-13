const { Sequelize } = require('sequelize');
const config = require("../../config/config.json");
const bootstrap = require("../../config/bootstrap.json");

if(bootstrap.ServerSettings.development === true){
    console.log("Development");
    var DBName = config.development.database;
    var UserName = config.development.username;
    var Password = config.development.password;
    var Dialect = config.development.dialect;
}
else if(bootstrap.ServerSettings.test === true) {
    console.log("Test");
    var DBName = config.test.database;
    var UserName = config.test.username;
    var Password = config.test.password;
    var Dialect = config.test.dialect;

}
else{
    console.log("production");
    var DBName = config.production.database;
    var UserName = config.production.username;
    var Password = config.production.password;
    var Dialect = config.production.dialect;

}

const sequelize = new Sequelize(DBName, UserName, Password, {
    host: 'localhost',
    dialect: Dialect,
    define: {
        timestamps: false
    },
    logging: false
});

// const sequelize = new Sequelize('hprofile', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     define: {
//         timestamps: false
//     },
//     logging: false
// });

module.exports = sequelize;
global.sequelize = sequelize;