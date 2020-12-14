async function home(request, reply) {
  return reply.data({ name: 'Money API', version: 'v1' })
}

async function register(server, prefix) {
  server.route({ method: 'GET', path: '/', handler: home })
  server.route({ method: 'GET', path: '/api', handler: home })
  server.route({ method: 'GET', path: '/api/v1', handler: home })
}

module.exports = { register }
