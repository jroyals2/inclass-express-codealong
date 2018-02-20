const mongoose = require('mongoose')
const companySchema = require('./db/schemas/companySchema')

const Company = mongoose.model('company', companySchema)

module.exports = Company