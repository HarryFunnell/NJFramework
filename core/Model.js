//Datbase connection ../core/database.js
var database = require('../Config/Database');
var connection = database.Connection;


class Model{
    constructor(Modelname) {
        this.Modelname = Modelname;
        this.queryall;
        this.queryparams;
        this.queryfirst; 
    }

    QueryAll(){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM ' + this.Modelname, function(error, queryall){
                if (error){
                    reject(error);
                }
                else{
                    resolve(queryall);
                }
            });
        });
    }

    Queryobject(object){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM ' + this.Modelname + ' ' + 'WHERE' + ' ' + object.column + ' ' + object.operator + ' ?' , [object.param], function(error, results){
                if (error){
                    reject(error);
                }
                else{
                    resolve(results);
                }
            });
        });
    }

    create(data){
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO ' + this.Modelname + ' SET ?', [data], function(error, results){
                if (error){
                    reject(error);
                }
                else{
                    resolve(results);
                }
            });
        });
    }
    update(data, id){
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE ' + this.Modelname + ' SET ? WHERE ID = ?', [data, id], function(error, results){
                if (error){
                    reject(error);
                }
                else{
                    resolve(results);
                }
            });
        });
    }

    customquery(sql, param){
        return new Promise((resolve,reject)=>{
            connection.query(sql.statement + ' ' + this.Modelname + ' ' + sql.clause, param, function(error, results){
                if (error){
                    reject(error);
                }
                else{
                    resolve(results);
                }
            });
        });
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM ' + this.Modelname + ' WHERE ID = ?', [id], function(error, results){
                if (error){
                    reject(error);
                }
                else{
                    resolve(results);
                }
            });
        });
    }
    
}
module.exports = Model;