const User = (opts) => {
  let {id = null, firstName, lastName, email} = opts
  return {
    id,
    firstName,
    lastName,
    email
  }
}

module.exports = User