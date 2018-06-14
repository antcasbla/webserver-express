const hbs = require('hbs');

//Función que se lanza cuando el template lo requiere
//Helpers
hbs.registerHelper('getAnio', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLocaleLowerCase();
    });

    return palabras.join(' ');
});