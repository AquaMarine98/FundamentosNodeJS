console.time('todo')
let suma = 0;
console.time('bucle');
for(let i = 0; i < 100000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');
for(let j = 0; j < 10000000; j++) {
    suma2 += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
        console.groupEnd('Asincrono');
});

console.timeEnd('todo')

function asincrona() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.group('Asincrono');
            console.log('Termina el proceso asincrono');
            resolve();
        }, 1000)
    })
}