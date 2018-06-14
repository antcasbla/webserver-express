const express = require('express')
const app = express()

const hbs = require('hbs');
//Importamos el helpers.js
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//__dirname => variable dnd está alojada la aplicación
//Cargar contenido estatico
app.use( express.static( __dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//Using hbs as the default view engine
// requires just one line of code in your app setup
// Express HBS engine
app.set('view engine', 'hbs');

//Movidos a helpers.js
// //Función que se lanza cuando el template lo requiere
// //Helpers
// hbs.registerHelper('getAnio', () => new Date().getFullYear());
//
// hbs.registerHelper('capitalizar', (texto) => {
//
//     let palabras = texto.split(' ');
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLocaleLowerCase();
//     });
//
//     return palabras.join(' ');
// });

// PUEDE HABER CONFLICTO cuando la URL es '/' y con la carga del contenido ESTATICO
// // Escuchamos SOLO las URL indicada
// app.get('/', (req, res) => {
//     //res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Eugenio',
//         edad: 30,
//         url: req.url
//     };
//
//     res.send(salida);
//
// })


//HBS
app.get('/', (req, res) => {

    // res.render('home', {
    //     nombre: 'Chloe',
    //     anio: new Date().getFullYear()
    // });

    res.render('home', {
        nombre: 'chloe'
    });

})

app.get('/about', (req, res) => {

    // res.render('about', {
    //     anio: new Date().getFullYear()
    // });

    res.render('about');

})

app.get('/data', (req, res) => {

    res.send('Hola Data')

})

// app.listen(3000, () => {
// console.log('Escuchando peticiones en el puerto 3000');
// })
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})