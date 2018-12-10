const knex = require('./db');

getAllUsers = () => {
  return knex('users').orderBy('created_at', 'desc');
};

module.exports = {
  getAllUsers,
  // getUserById,
  // getUserWithNestedTags,
  // createUser,
  // updateUser,
  // deleteUserById,
};
