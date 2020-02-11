import express,{Application,Request,Response,NextFunction} from 'express';
import mysql from 'mysql'
const app:express.Application = express();
const connection = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'password',
    database:'cool_menu'
})

connection.connect();

var  addSql = 'INSERT INTO websites(runoob_id,runoob_title,runoob_author,submission_date) VALUES(?,?,?,?)';
var addSqlParams = [2,'番茄炒蛋','罗嘉豪','2020-02-11']
connection.query(addSql,addSqlParams,(err,result)=>{
    if (err) {
        console.log('[INSERT ERROR] - ',err.message)
        return
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:',result);        
    console.log('-----------------------------------------------------------------\n\n');  
})
connection.end();
app.listen(5000, ()=>console.log('Server is running')) 