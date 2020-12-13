const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  place: String,
  userId: String,
  createdAt: Date,
  updatedAt: Date,
  __version: Number,
}, { timestamps: true, versionKey: '__version' })

const TransactionModel = mongoose.model('Transaction', TransactionSchema, 'transactions')

module.exports = { TransactionModel, TransactionSchema }
