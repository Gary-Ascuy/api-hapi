async function register(server, prefix) {
  server.route({ method: 'GET', path: '/', handler: home })
  server.route({ method: 'GET', path: '/api', handler: home })
  server.route({ method: 'GET', path: '/api/v1', handler: home })
}

async function home() {
  return { name: 'Money API', version: 'v1' }
}

module.exports = { register }