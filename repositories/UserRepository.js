let User = require('../model/User')
let {
  getUser,
  makeCreateUser,
  listUsers
} = require('./UserRepositoryMemory')

let createUser = makeCreateUser(User)

const UserRepository = () => ({
  get: (userId) => getUser(userId),
  create: (userEntity) => createUser(userEntity),
  find: listUsers
})

module.exports = UserRepository
