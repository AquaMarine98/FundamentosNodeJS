function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    try {
        return 3 + z;
    } catch(err) {
        console.error('Error en mi funcion asincrona');
        cb(err);
    }
}

try {
    //seRompe();
    seRompeAsincrona(function(err) {
        console.log('hay error');
        console.log(err.message);
    })
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err.message);
    console.log('Descuida, lo hemos capturado');
}

console.log('esto de aqui está al final');