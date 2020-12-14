const Hapi = require('@hapi/hapi')

const { get } = require('./settings')
const { logger } = require('./logger')
const { connect, disconnect } = require('./app/dataAccessLayer/database')
const { register } = require('./app/controllers')

function buildDataMethod(data, error) {
  if (error) {
    return { success: false, error }
  }

  return { success: true, data }
}

async function main() {
  await connect()

  const { host, port } = get('server')
  const server = Hapi.server({ port, host })
  server.decorate('toolkit', 'data', buildDataMethod)
  await register(server, '/api/v1')

  await server.start()
  logger.info(`Server running on ${server.info.uri}`)
}

async function exit(error) {
  await disconnect()
  if (error) logger.error(error)
  process.exit(1)
}

process.on('unhandledRejection', exit)

module.exports = { main }
