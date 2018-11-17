let User = require('../model/User')

let john = User({
  id: 1,
  firstName: 'john',
  lastName: 'smith',
  email: 'john@email.com'
})
let bill = User({
  id: 2,
  firstName: 'bill',
  lastName: 'tee',
  email: 'bill@email.com'

})

const USER_DB_MEMORY = [john, bill]

module.exports = USER_DB_MEMORY