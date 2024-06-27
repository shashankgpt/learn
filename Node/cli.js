const readline = require('node:readline');

const cmd = process.argv.splice(2);

if (!cmd.length) {
    console.log(`
    usuage cli get-data [options]
    Options:
        -h, --help          Display help information
        -v, --version       version of app
        -n, --number        number of todo
    `)
} else {
    if (cmd[0] === 'get-data') {
        const type = cmd[1]
        switch (type) {
            case '-h':
            case '--help':
                console.log('help')
                break;
            case '-n':
            case '-number':
                if (!Number.isNaN(Number(cmd[2]))) {
                    console.log('fetching...', cmd[2])
                }
                console.log(cmd[2])
                break;
        }
    }
}