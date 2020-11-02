const mongoose = require('mongoose')
const Schema = mongoose.Schema

const delegateSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    phone: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    organisationalChallenges: { type: String, required: true, trim: true },
    alterStrategies: { type: String, required: true, trim: true },
    strategiesImplemented: { type: String, required: false, trim: true }
  },
  { timestamps: true }
)

const Delegate = mongoose.model('Delegate', delegateSchema)

module.exports = Delegate
