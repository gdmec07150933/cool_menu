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
app.listen(5000, ()=>console.log('Server is running'))