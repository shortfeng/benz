"use strict";
const mysql=require("mysql");
const pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"",
    charset:"utf8",
    database:"cars",
    connectionLimit:10,
    multipleStatements:true
});
module.exports=pool;