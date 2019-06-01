var express = require("express");

var app=express();

app.get("/",(req,res)=>{
    res.send('Estoy trinfando!! Eureka! Technology🐙🎨 ');
});
      
app.get("/eureka",(req,res)=>{
  res.send('Eureka! Tech 2019 ©🍻')
});

app.listen(5005,()=>{
    console.log("Servidor escuchando en el puerto 5005");
});