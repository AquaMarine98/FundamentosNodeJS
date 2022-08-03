const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err, data) => {
        if(err) {
            console.log('No hemos podido escribirlo' + err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

//escribir(__dirname + '/archivo.txt', 'Soy un archivo nuevo');
//leer(__dirname + '/archivo.txt', console.log);
borrar(__dirname + '/archivo.txt', console.log);