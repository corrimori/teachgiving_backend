const model = require('../models/users');

getAllUsers = (req, res, next) => {
  console.log('in user controllers...');

  let promise = model.getAllUsers();

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

getUserById = (req, res, next) => {
  let id = req.params.id;
  let promise = model.getUserById(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

// gets all kids for user
fetchKidsForUser = (req, res, next) => {
  console.log('in fetch kids for user - controller ... ');
  let id = req.params.id;
  let promise = model.fetchKidsForUser(id, req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });
  promise.catch(error => {
    next(error);
  });
};

createUser = (req, res, next) => {
  let promise = model.createUser(req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

updateUser = (req, res, next) => {
  let id = req.params.id;
  let promise = model.updateUser(id, req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
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
  fetchKidsForUser,
  createUser,
  updateUser,
  deleteUserById,
};
