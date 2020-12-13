const { required } = require('nconf')
const winston = require('winston')

const { get } = require('../settings')

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.simple(),
)

const logger = winston.createLogger({
  level: get('logger.level'),
  transports: [new winston.transports.Console({ format })],
})

module.exports = { logger }
