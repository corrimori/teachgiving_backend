const usersQuery = require('../../queries/users');

const getAllUsers = () => {
  console.log('in user models...');
  users = usersQuery.getAllUsers();

  return users.then(result => {
    return result.length < 1
      ? { error: 'error retreiving users', status: 404 }
      : result;
  });
};

const getUserById = id => {
  user = usersQuery.getUserById(id);

  return user.then(result => {
    return !result ? { error: 'error retreiving user', status: 404 } : result;
  });
};

//==========================================================
//  /:id/kids      gets all kids for a user
//====================+=====================================
const fetchKidsForUser = (id, body) => {
  console.log('in fetch kids for user - models ... ');

  user = usersQuery.fetchKidsForUser(id, body);

  return user.then(result => {
    return result.length < 1
      ? { error: 'error retreiving user kids', status: 404 }
      : result;
  });
};

const createUser = body => {
  console.log('body>>', body);
  user = usersQuery.createUser(body);

  return user.then(result => {
    return !result ? { error: 'error creating user', status: 500 } : result;
  });
};

const updateUser = (id, body) => {
  user = usersQuery.updateUser(id, body);

  return user.then(result => {
    return !result ? { error: 'error updating user', status: 500 } : result;
  });
};

const deleteUserById = id => {
  user = usersQuery.deleteUserById(id);

  return user.then(result => {
    return !result ? { error: 'error deleting user', status: 500 } : result;
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  fetchKidsForUser,
  createUser,
  updateUser,
  deleteUserById,
};
