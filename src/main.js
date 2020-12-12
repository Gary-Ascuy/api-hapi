const Hapi = require('@hapi/hapi');

const { get } = require('./settings');
const { logger } = require('./logger');

async function main() {
  const { host, port } = get('server');
  const server = Hapi.server({ port, host });

  await server.start();
  logger.info(`Server running on ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  logger.error(err);
  process.exit(1);
});

module.exports = { main };
