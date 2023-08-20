const express = require('express');
const cors = require('cors');
const mysql =require('mysql');

const { request, response } = require('express');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    passward: "",
    database: "kavyalogin"
})
app.post('/signup', (request,response)=>{
    const sqlqry="INSERT INTO login (`name`,`email`,`passward`) VALUES(?)";
    const values =[
        request.body.name,
        request.body.email,
        request.body.passward
    ]
    db.query(sqlqry,[values],(err,data)=>{
        if(err){
            return response.json("Error");
        }
        return response.json(data);
    })
});
app.post('/login', (request,response)=>{
    const sql="SELECT * FROM login WHERE `email`= ? AND `passward`= ?";
    db.query(sql,[request.body.email, request.body.passward],(err,data)=>{
        if(err){
            return response.json("Error");
        }
        if(data.length >0){
            return response.json("Success");
        }else{
            return response.json("fail");
        }
        
    })
});

app.listen(8081,()=>{
    console.log("listening")
})