var express = require("express");
var bodyParser = require("body-parser");
const ngrok = require('ngrok');
const linea = '\n-------------------------------------------------------\n'
var d = new Date();

var app = express();

var port = process.env.PORT || 3000;
var ip = process.env.IP || "127.0.0.1";

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/', function (req, res) {
    if (req.body.queryResult.action == "suma") {
        let num1 = parseFloat(req.body.queryResult.parameters.num1);
        let num2 = parseFloat(req.body.queryResult.parameters.num2);
        let sum = num1 + num2;
        response = num1 + " + " + num2 + " es " + sum;
        res.json({
            "fulfillmentText": response
        });
    } else if (req.body.queryResult.action == "restar") {
        let num1 = parseFloat(req.body.queryResult.parameters.num1);
        let num2 = parseFloat(req.body.queryResult.parameters.num2);
        let rest = num1 - num2;
        response = num1 + " - " + num2 + " es " + rest;
        res.json({
            "fulfillmentText": response
        });
    } else if (req.body.queryResult.action == "multiplicar") {
        let num1 = parseFloat(req.body.queryResult.parameters.num1);
        let num2 = parseFloat(req.body.queryResult.parameters.num2);
        let mult = num1 * num2;
        response = num1 + " * " + num2 + " es " + mult;
        res.json({
            "fulfillmentText": response
        });
    } else if (req.body.queryResult.action == "dividir") {
        let num1 = parseFloat(req.body.queryResult.parameters.num1);
        let num2 = parseFloat(req.body.queryResult.parameters.num2);
        let div = num1 / num2;
        response = num1 + " / " + num2 + " es " + div;
        res.json({
            "fulfillmentText": response
        });
    }
});

app.listen(port, ip);

(async function () {
    const url = await ngrok.connect(port);
    console.log(` ${linea} Servidor corriendo en la URL ${url} `);
    console.log(` Pegar esta URL en dialogFlow -> Fulfillment -> Webhook -> URL`);
    console.log(` inicia: ${d} ${linea} `);
})();
