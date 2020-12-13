async function register(server, prefix) {
  const path = `${prefix}/transactions`
  const pathById = `${path}/{_id}`

  server.route({ method: 'GET', path, handler: getAll })
  server.route({ method: 'GET', path: pathById, handler: getBy })
  server.route({ method: 'POST', path, handler: create })
  server.route({ method: 'PUT', path: pathById, handler: update })
  server.route({ method: 'DELETE', path: pathById, handler: remove })
}

async function getAll(request, reply) {
  console.log('get all transactions')
  return { ok: true }
}

async function getBy(request, reply) {
  console.log('get all transactions')
  return { ok: true }
}

async function create(request, reply) {
  console.log('get all transactions')
  return { ok: true }
}

async function update(request, reply) {
  console.log('get all transactions')
  return { ok: true }
}

async function remove(request, reply) {
  console.log('get all transactions')
  return { ok: true }
}

module.exports = { register }
