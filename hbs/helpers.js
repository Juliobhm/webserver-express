//Helpers
const hbs = require('hbs'); //Esta instrucción tiene que estar aquí y también en server, para poder usar hbs en los dos sitios.


hbs.registerHelper('devolverAnio', () => {
    return new Date().getFullYear();
});