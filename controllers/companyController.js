const express = require('express')
const router = express.Router()
const Company = require('../models/company')



router.get('/', (req, res) => {
    Company.find().then((companies) => {
        res.render('company/index', {
            companies
        })
    })
})

router.get('/:id', (req, res) => {
    Company.findById(req.params.id).then((company) => {
        res.render('company/show', {
            company
        })
    })
})



module.exports = router