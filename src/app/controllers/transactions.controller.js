const Joi = require('joi')

const transactionService = require('../services/transactions')
const { logger } = require('../../logger')

const user = { sub: 'eb66de8e-1ad8-41d4-b039-6f11013e7adc' }

async function getAll(request, reply) {
  logger.info('GET /transactions - list all elements')
  return reply.data(await transactionService.getAll(user))
}

async function getBy(request, reply) {
  logger.info('GET /transactions/_id - get an element')
  return reply.data(await transactionService.getBy(request.params._id, user))
}

async function create(request, reply) {
  logger.info('POST /transactions - create an element')
  return reply.data(await transactionService.create(request.payload, user))
}

async function update(request, reply) {
  logger.info('PUT /transactions/_id - update an element')
  return reply.data(await transactionService.update(request.params._id, request.payload, user))
}

async function remove(request, reply) {
  logger.info('DELETE /transactions/_id - delete an element')
  return reply.data(await transactionService.remove(request.params._id, user))
}

async function register(server, prefix) {
  const path = `${prefix}/transactions`
  const pathById = `${path}/{_id}`

  const options = {
    validate: {
      payload: Joi.object({
        type: Joi.string().min(2).max(3),
        description: Joi.string().min(3).max(50),
      }).required(),
    },
  }

  server.route({ method: 'GET', path, handler: getAll })
  server.route({ method: 'GET', path: pathById, handler: getBy })
  server.route({ method: 'POST', path, handler: create, options })
  server.route({ method: 'PUT', path: pathById, handler: update })
  server.route({ method: 'DELETE', path: pathById, handler: remove })
}

module.exports = { register }
