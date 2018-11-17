const UsersRoutes = module.exports = {}

// Require controllers
const UsersController = require('../../controller/UsersController')
const Users = UsersController()

UsersRoutes.index = (req, res, next) => {
  Users.listUsers().then(data => res.send(data))
}

UsersRoutes.show = (req, res, next) => {
  let userId = req.params.id
  Users.getUser(userId)
    .then(data => res.send(data))
}

