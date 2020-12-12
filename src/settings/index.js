const nconf = require('nconf')

nconf.argv()
   .env('__')
   .file('./src/settings/defaults.json')

function get(key) {
    return nconf.get(key)
}

module.exports = { get }
