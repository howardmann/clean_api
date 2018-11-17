const express = require('express')
const router = express.Router()

// require routes
const users = require('./users')

router
  .get('/users', users.index)
  .get('/users/:id', users.show)

module.exports = router