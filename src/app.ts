import express,{Application,Request,Response,NextFunction} from 'express';

const app:express.Application = express();
const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'password',
    database:'cool_menu'
})

connection.connect();
app.listen(5000, ()=>console.log('Server is running')) 