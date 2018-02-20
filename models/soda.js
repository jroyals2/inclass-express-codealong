const mongoose = require('mongoose')
const sodaSchema = require('../db/schemas/sodaSchema')

const Soda = mongoose.model('soda', sodaSchema)

module.exports = Soda