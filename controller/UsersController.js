const UserRepository = require('../repositories/UserRepository')
const UserSerializer = require('./serializers/UserSerializer')

const UsersController = () => {
  let repository = UserRepository()
  let serialize = UserSerializer
  return {
    getUser: (userId) => {
      return repository.get(userId)
        .then(user => {
          if (user.length < 1) { return {status: 'No user found'}}
          return serialize(user)[0]
        })
    },
    createUser: (userEntity) => {
      return repository.create(userEntity)
        .then(user => serialize(user))
    },
    listUsers: () => {
      return repository.find()
        .then(users => serialize(users))
    }
  }
}

module.exports = UsersController

// TESTING
// let Users = UsersController() 

// const util = require('util')

// Users.getUser(1)
//   .then(result => {
//     console.log(`getUser: ${util.inspect(result)}`); 
//   })

// Users.createUser({firstName: 'howie', lastName: 'mann', email: 'howie@email.com'})
//   .then(result => {
//     console.log(`createUser: ${util.inspect(result)}`);
//     return Users.listUsers()
//   })
//   .then(result => {
//     console.log(`listUsers: ${util.inspect(result)}`);
//   })