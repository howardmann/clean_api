const USER_DB_MEMORY = require('../database/UserMemory')

let getUser = (userId) => {
  let user = USER_DB_MEMORY.filter(el => el.id == userId)
  return Promise.resolve(user)
}

let makeCreateUser = (User) => 
  (userEntity) => {
    let {firstName, lastName, email} = userEntity
    let newId = USER_DB_MEMORY[USER_DB_MEMORY.length - 1].id++
    
    let newUser = User({id: newId, firstName, lastName, email})
    USER_DB_MEMORY.push(newUser)
    return Promise.resolve(newUser)
  }

let listUsers = () => {
  return Promise.resolve(USER_DB_MEMORY)
}

module.exports = {
  getUser,
  makeCreateUser,
  listUsers
}