const Hapi = require('@hapi/hapi')

const { get } = require('./settings')
const { logger } = require('./logger')
const { connect, disconnect } = require('./app/models/database')

async function main() {
  await connect()

  const { host, port } = get('server')
  const server = Hapi.server({ port, host })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => 'Hello World!'
  })

  await server.start()
  logger.info(`Server running on ${server.info.uri}`)
}

function exit(error) {
  disconnect()
  logger.error(error)
  process.exit(1)
}

process.on('unhandledRejection', exit)

module.exports = { main }
