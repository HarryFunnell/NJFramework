//Database Config
//Load module file
const Module = require('../core/Module')
const mysql = Module.mysql;
//mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hprofile'
});

exports.Connection = connection;