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


router.get('/new', (req, res) => {
    res.render('company/new')
})

router.post('/', (req, res) => {
    const newCompany = new Company({
        name: req.body.name,
        location:  req.body.location
    })
    newCompany.save()
    .then((savedCompany) => {
        console.log(savedCompany)
        res.redirect(`/companies/${savedCompany._id}`)
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