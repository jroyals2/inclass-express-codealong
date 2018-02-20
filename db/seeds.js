const mongoose = require('mongoose')
const Soda = require('../models/soda')
const Company = require('../models/company')

// separate from the server

mongoose.connect('mongodb://localhost/soda-app')
const db = mongoose.connection
db.on('open', () => {
  console.log('Successfully connected to mongoDB')
})
db.on('error', (err) => {
  console.log(err)
})

const sprite = new Soda({
  name: 'Sprite',
  price: 1.50,
  packaging: 'bottle',
  quantitySold: 100
})
const pepsiCola = new Soda({
  name: 'Pepsi',
  price: 2.50,
  packaging: 'can',
  quantitySold: 400
})
const dietCoke = new Soda({
  name: 'Diet Coke',
  price: 1.00,
  packaging: 'can',
  quantitySold: 690
})
const mtnDew = new Soda({
  name: 'Mountain Dew',
  price: 10.50,
  packaging: 'bottle',
  quantitySold: 10
})
const pepsi = new Company({
  name: 'Pepsi',
  location: 'who cares',
  sodas: [ pepsiCola, mtnDew ]
})
const coke = new Company({
  name: 'Coca-Cola',
  location: 'Atlanta, GA',
  sodas: [ dietCoke, sprite ]
})

Soda.remove().then(() => {
    return Company.remove()
}).then(() => {
    return Company.insertMany([coke, pepsi])
}).then(() => {
    console.log('saved successfully')
    db.close()
}).catch((err) => {
    console.log(err)
})