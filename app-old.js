const http = require('http');

// Escuchamos todas las URLs no importa que URL sea
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Eugenio',
        edad: 30,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    //res.write('Hola Mundo');

    res.end(); // hemos acabado de crear la respuesta

})
.listen(8080);

console.log('Escuchando el puerto 8080')