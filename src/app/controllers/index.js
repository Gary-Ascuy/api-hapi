const home = require('./home.controller')
const transactions = require('./transactions.controller')

async function register(server, prefix) {
  home.register(server, prefix)
  transactions.register(server, prefix)
}

module.exports = { register }
