const { argv } = require('yargs')
            .options({
                direction: {
                    alias: 'd',
                    describe: 'Dirección de la ciudad para obtener el clima',
                    demand: true
                }
            })
            .help();

module.exports = {
    argv
};