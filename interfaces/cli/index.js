let args = require('yargs-parser')(process.argv.slice(2))
let UsersController = require('../../controller/UsersController')
let Users = UsersController()

let printHelp = function(){
  console.log(`
    Help usage:
    --index  list users
    --show   find user by {ID}
    --help   print help
  `);
}

let valid = args.index || args.show

if (args.help || !valid) {
  printHelp()
  process.exit(1)
}

if (args.index) {
  Users.listUsers().then(data => {
    console.log(data);
    process.exit(1)
  })
}

if (args.show) {
  Users.getUser(args.show).then(data => {
    console.log(data);
    process.exit(1)
  })
}
