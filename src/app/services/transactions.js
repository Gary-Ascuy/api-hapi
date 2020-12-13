const TransactionDal = require('../dataAccessLayer/transactions/transactions.dal')

async function getAll(user) {
  return TransactionDal.getAll(user)
}

async function getBy(_id, user) {
  return TransactionDal.getBy(_id, user)
}

async function create(data, user) {
  return TransactionDal.create(data, user)
}

async function update(_id, data, user) {
  return TransactionDal.update(_id, data, user)
}

async function remove(_id, user) {
  return TransactionDal.remove(_id, user)
}

module.exports = { getAll, getBy, create, update, remove }
