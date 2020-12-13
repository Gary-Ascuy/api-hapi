const TransactionModel = require('./transactions.model')

async function getAll(user) {
  return await TransactionModel.find({ userId: user.sub})
}

async function getBy(_id, user) {
  const event = await TransactionModel.findOne({ _id, userId: user.sub })

  if (!event) throw new Error('Not found')
  return event
}

async function create(data, user) {
  const transaction = TransactionModel.create({ userId: user.sub, ...data })
  return getBy(transaction._id, user)
}

async function update(_id, data, user) {
  const value = { $set: data, $inc: { __version: 1 } }
  const transaction = await TransactionModel.findOneAndUpdate({ _id, userId: user.sub }, value)
  return getBy(transaction._id, user)
}

async function remove(_id, user) {
  const transaction = await TransactionModel.findOneAndRemove({ _id, userId: user.sub })

  if (!transaction) throw new Error('Not found')
  return transaction
}

module.exports = { getAll, getBy, create, update, remove }
