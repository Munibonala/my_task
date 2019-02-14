var express = require("express");
var cors = require("cors")
var fs=require("fs");
var app=express();
app.use(cors());

app.get('/details',(req,res)=>{
    fs.readFile('./static/employee.json',(err,data)=>{
        if(err){
            res.send({'read':'failed'});
        }else{
            res.send(data);
        }
    });
});

app.listen(8000);
console.log("Server listening the port no.8000");