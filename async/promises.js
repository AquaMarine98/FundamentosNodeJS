function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 1000)
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            reject();
        }, 500)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios '+ nombre)
            resolve();
        }, 1000)
    })
}

// ---

console.log('Iniciando proceso');
hola('Aqua')
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminando proceso');
    })
    .catch(error => {
        console.error('Ha habido un error');
        console.log(error);
    })