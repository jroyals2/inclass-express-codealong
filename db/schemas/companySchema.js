const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sodaSchema = require('./sodaSchema')

const companySchema = new Schema ({
    name: String,
    location: String,
    sodas: [sodaSchema]
})


module.exports = companySchema