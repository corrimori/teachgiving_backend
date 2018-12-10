const knex = require('./db');

getAllUsers = () => {
  return knex('users').orderBy('created_at', 'desc');
};

getUserById = id => {
  return knex('users').where('id', id);
};

createUser = body => {
  return knex('users')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

updateUser = (id, body) => {
  return (
    knex('users')
      .where('id', id)
      // .update(body)
      .update({
        id: id,
        name: body.name,
        hashPass: body.hashPass,
      })
      .returning('*')
      .catch(err => {
        console.error(err);
        knex.destroy();
        process.exit(1);
      })
  );
};

deleteUserById = id => {
  return knex('users')
    .where('id', id)
    .del()
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
};
