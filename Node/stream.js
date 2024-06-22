const { stdout } = require('process');
const {Readable, Writable} = require('stream');

const MyStream = new Readable( {
    read(){}
})

const MyStreamWrite = new Writable( {
    write(chunk, en, cb){
        console.log("test",chunk.toString())
        cb();
    }
})

MyStream.push('Hello');
MyStream.push('World');
MyStream.push(null);

MyStream.pipe(MyStreamWrite)