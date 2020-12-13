const TransactionDal = require('../dataAccessLayer/transactions/transactions.dal')

async function getAll(user) {
  return await TransactionDal.getAll(user)
}

async function getBy(_id, user) {
  return await TransactionDal.getBy(_id, user)
}

async function create(data, user) {
  return await TransactionDal.create(data, user)
}

async function update(_id, data, user) {
  return await TransactionDal.update(_id, data, user)
}

async function remove(_id, user) {
  return await TransactionDal.remove(_id, user)
}

module.exports = { getAll, getBy, create, update, remove }
