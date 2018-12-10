const model = require('../models/users');

getAllUsers = (req, res, next) => {
  let promise = model.getAllUsers();

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

// USE KNEX to GET a specific user
// router.get('/:userid', (req, res, next) => {
//   knex('users')
//     .where('id', req.params.userid)
//     // user is data
//     .then(user => {
//       let newUserArray = user.map(user => {
//         delete user.created_at;
//         delete user.updated_at;
//         console.log('user>>', user);
//         return user;
//       });
//       console.log('the specific user>>', newUserArray);
//       res.send(newUserArray);
//     });
// });

module.exports = {
  getAllUsers,
  // getUserById,
  // getUserWithNestedTags,
  // createUser,
  // updateUser,
  // deleteUserById
};
