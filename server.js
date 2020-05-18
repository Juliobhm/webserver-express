const express = require('express'); //Llamada al pquete express de node.js
const app = express(); //Apertura de express. Permite usar app
const hbs = require('hbs');

//Llamada al archivos helpers, que tiene las variables que se usan en el html,como el año actual. Se guardan en archivo aparte para que el archivo server.js quede limpio.
require('./hbs/helpers');

const puerto = process.env.PORT || 3000; //Define la variable que usa Heroku para elegir el puerto. Cuando se trabaje en local, se usará el 3000

app.use(express.static(__dirname + '/public')); //Define un carpeta pública donde se van a mostrar los archivos. __dirname es una referencia que permite buscar en cualquier directorio para buscar /public

//Express HBS Engine, para randerizar partes de una página app hace referencia a app.use(expess...) anterior
hbs.registerPartials(__dirname + '/views/parciales'); //Permite el uso de parciales, en el directorio views/parciales
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Julio',
        anio: new Date().getFullYear() //Esta función pone de forma dinámica el año actual.

    }); //La instrucción render sirve para renderizar el archivo home.hbs, de esta forma, se arrancan como si fueran html. El segundo parámetro sirve para rellenar las variables del archivo home.hbs 
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Julio B',
        anio: new Date().getFullYear() //Esta función pone de forma dinámica el año actual.

    }); //Esta llamada abre la segunda página, about.
});


//Puerto de trabajo
app.listen(puerto, () => {
    console.log(`Escuchando el puerto ${puerto}`);
});