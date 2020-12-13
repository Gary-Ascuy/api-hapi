const mongoose = require('mongoose')

const { get } = require('../../settings')
const { logger } = require('../../logger')

async function connect() {
  const { uri, options } = get('database')

  try {
    const url = new URL(uri)
    const db = await mongoose.connect(uri, options)
    logger.info(`database connected to ${url.protocol}//${url.host}${url.pathname}`)
    return db
  } catch (error) {
    logger.error(`Error trying to connect to database`, error)
  }
}

async function disconnect() {
  mongoose.connection.close(error => {
    logger.error(`Mongoose default connection is disconnected`, error)
  })
}

module.exports = { connect, disconnect }
