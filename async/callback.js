function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola '+ nombre);
        miCallback();
    }, 1000)
}
function hablar(funcionHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        funcionHablar();
    }, 500)
}
function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios '+ nombre)
        otroCallback();
    }, 1000)
}
function conversacion(nombre, veces, callback) {
    if(veces >= 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// ---
console.log('aloha');
hola('Aqua', function() {
    conversacion('Aqua', 3, function() {
        console.log('Terminando proceso');
    })
})
/* console.log('aloha');
hola('Aqua', function() {
    hablar(function() {
        adios('Aqua', function() {
            console.log('Terminando proceso');
        });
    })
}) */
