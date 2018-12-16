const _serializeSingleUser = (user) => {
  return {
    'id': user.id,
    'first-name': user.firstName,
    'last-name': user.lastName,
    'email': user.email,
  };
};


const UserSerializer = (data) => {
  if (!data) { return 'Expect data to be not undefined or null'}
  if (Array.isArray(data)) {
    return data.map(_serializeSingleUser)
  }
  return _serializeSingleUser(data)
}


module.exports = UserSerializer