let mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pbpanchal@121',
    database: 'mydb'
});

conn.connect(function(err){
   if(err){
    throw err;
   }else{
    console.log("Connected!");
   }
   let sql = "DROP TABLE students2";
   conn.query(sql, function(err, result){
    if(err){
        throw err;
    }else{
        console.log("Table Dropped");
    }
   });
});