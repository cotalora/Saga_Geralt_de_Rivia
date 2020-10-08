var express = require("express");
var bodyParser = require("body-parser");

const linea = '\n-------------------------------------------------------\n'

var d = new Date();

var app = express();

var port = process.env.PORT || 3000;
var ip = process.env.IP || "127.0.0.1";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post('/echo', function (req, res) {
    if (req.body.queryResult.action == "input.welcome") {

        let msj = 
        "¡Hola, soy tu chatBot de la saga de los libros de  Geralt de Rivia! ¿Sobre qué libro quieres conocer?"+
        "  \n1. El último deseo."+
        "  \n2. La espada del destino."+
        "  \n3. La sangre de los elfos."+
        "  \n4. Tiempo de odio."+
        "  \n5. Bautismo de fuego.";
        response = msj
        res.json({
            "fulfillmentText": response
        });
    } else if (req.body.queryResult.action == "MenuLibros") {
        let libNum1 = req.body.queryResult.parameters.lib1;
        let libNum2 = req.body.queryResult.parameters.lib2;
        if (libNum2 == "La") {
            libNum2 = "2";
            libNum = parseInt(libNum2);
        } else if (libNum2 == "2") {
            libNum = parseInt(libNum2);
            response = "Diga prueba";
        }


        if (req.body.queryResult.action == "libro1" && libNum == 2) {
            response = "libNum2";
        }
        
        res.json({
            "fulfillmentText": response
        });
    }
});

app.listen(port);
