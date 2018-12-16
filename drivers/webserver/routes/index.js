const express = require('express')
const router = express.Router()

// require routes
const users = require('./users')
const home = require('./home')

// static pages
router
  .get('/', home)

// users pages
router
  .get('/users', users.index)
  .get('/users/:id', users.show)

module.exports = router