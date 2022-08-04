process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
})

process.on('exit', () => {
    console.log('Ale, el proceso acabó');
})

process.on('uncaughtException', (err, origin) => {
    console.error('Vaya se nos ha olvidado capturar el error');
    console.error(err);
})

funcionquenoexiste();