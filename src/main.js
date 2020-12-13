const Hapi = require('@hapi/hapi')

const { get } = require('./settings')
const { logger } = require('./logger')
const { connect, disconnect } = require('./app/dataAccessLayer/database')
const { register } = require('./app/controllers')

async function main() {
  await connect()

  const { host, port } = get('server')
  const server = Hapi.server({ port, host })
  await register(server, '/api/v1')

  await server.start()
  logger.info(`Server running on ${server.info.uri}`)
}

function exit(error) {
  disconnect()
  if (error) logger.error(error)
  process.exit(1)
}

process.on('unhandledRejection', exit)

module.exports = { main }
