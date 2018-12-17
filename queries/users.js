const knex = require('./db');

getAllUsers = () => {
  console.log('in user queries...');

  return knex('users').orderBy('created_at', 'desc');
};

getUserById = id => {
  return knex('users').where('id', id);
  // return knex('users').join('kids', 'kids.user_id', 'users.id');
};

getUserByUserName = name => {
  console.log('in getUserByUserName queries ...');
  return knex('users')
    .where('name', name)
    .first();
};

//===================================================
//  gets all kids for user
//===================================================

fetchKidsForUser = (id, body) => {
  console.log('in fetch kids for user - queries ... ');

  // returns a nested array of pledges
  return knex('kids')
    .where('kids.user_id', id)
    .then(kids => {
      console.log('kids>>', kids);
      const promises = kids.map(kid => {
        return knex('pledges')
          .where({ kid_id: kid.id })
          .join('charities', 'charities.id', '=', 'pledges.charity_id')
          .then(pledges => {
            kid.pledges = pledges;
            return kid;
          });
      });

      return Promise.all(promises);
    });
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
  getUserByUserName,
  fetchKidsForUser,
  createUser,
  updateUser,
  deleteUserById,
};
