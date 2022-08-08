const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

/* readableStream.on('data', function(chunk) {
    //data += chunk;
    console.log(chunk);
});
readableStream.on('end', function() {
    console.log(data);
}); */


// --
/* process.stdout.write('Hola')
process.stdout.write('que')
process.stdout.write('tal?') */

// --

class Mayus extends stream.Transform {
    constructor() {
        super();
    }
    _transform(chunk, codif, cb) {
        let chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        cb();
    }
}

var mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);