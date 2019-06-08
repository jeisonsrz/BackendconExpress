//Instlacion del demonio  npm install nodemon --save-dev
//instalar body-parser npm install body-parser

const express = require("express");
const bodyParser=require("body-parser");
const app=express();

//mildware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routeUsers=require("./routes/users")(app) //pasamps ña instancia e express como parametro al archiivos users de rutas

app.listen(5000,() =>{
    console.log("Servidor escuchando en el puerto 5000 🍨")
});

//leemos parámetros y en el get se envian por la url y los post envian la info en el body escondidos para el usuario
/*app.get("/",(req,res)=>{
    console.log("Hola desde EXPRESS MAMITA");
    res.send("Saludos amigos")
});*/

