const knex = require('./db');

getAllUsers = () => {
  console.log('in user queries...');

  return knex('users').orderBy('created_at', 'desc');
};

getUserById = id => {
  console.log('testing different queries %%%%%%%%%%%%%%% ...');
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

  return (
    knex('kids')
      .join('users', 'users.id', '=', 'kids.user_id')
      // .join('avatars', 'avatars.id', '=', 'kids.avatar_id')
      .select(
        'users.id as id',
        'users.name as name',
        'kids.id as kidId',
        'kids.name as kidName',
        'kids.runningTotal',
        'kids.avatarImage'
        // 'kids.avatar_id as avatarId',
        // 'avatars.avatarImage as avatarImg'
      )
      .where('user_id', id)
      .distinct()
  );
};

// returns a nested array of kids
//   return knex('users').then(users => {
//     const promises = users.map(user => {
//       return knex('kids')
//         .where({ user_id: user.id })
//         .then(kids => {
//           user.kids = kids;
//           return user;
//         });
//     });
//
//     return Promise.all(promises);
//   });
// };

// .then((kids)) => {
//   let newKidsArray = kids.map((kids) => {
//     return kids
//   })
//   res.send(data)
// })

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
