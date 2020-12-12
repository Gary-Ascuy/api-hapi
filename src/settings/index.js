const nconf = require('nconf')

/**
 * ENVIRONMENT VARIABLES
 *   export server__host=localhost
 *   export server__port=5000
 * 
 * COMMAND LINE INTERFACE
 *   node src/index.js --server:port 5000
 *   yarn start --server:host 127.0.0.1
 */

nconf.argv()
   .env('__')
   .file('./src/settings/defaults.json')

function get(key) {
    return nconf.get(key)
}

module.exports = { get }
