var express = require("express")

var app = express() //Levanta el server

app.get("/*", function(req,res){ //Ruta default.
    res.sendFile(__dirname + "/index.html") //Renderiza el HTML template
})

//Primer se configura el static, luego el API y por ultimo la ruta default.

app.listen(3000, function(){
    console.log("Hello World")
})

