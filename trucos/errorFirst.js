function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch(err) {
            callback(err);
        }
    }, 1000);
}

try {
    asincrona((err, dato) => {
        if(err) {
            console.error('Tenemos un error...');
            console.error(err);
            //throw err;
            return false;
        }
    
        console.log('Todo ha ido bien, mi data es ' + dato);
    })
} catch(err) {
    console.error('Hemos capturado un error');
    console.error(err);
}
