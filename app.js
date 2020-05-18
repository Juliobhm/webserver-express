 const http = require('http'); //Llama al paquete de node.js para poder usar un server.
 http.createServer((req, res) => {

         res.write('Hola mundo');
         res.end();

     })
     .listen(8080);
 console.log(`Escuchando 8080`);