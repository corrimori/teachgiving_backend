const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

login = async (req, res, next) => {
  console.log('in login function controllers ...');
  let { name, password } = req.body;
  console.log('name>>>>>', name);
  console.log('password>>>>>', password);
  let user = await model.getUserByUserName(name);
  console.log('user from controller>>>>', user);
  if (!user)
    return res
      .status(400)
      .json({ status: 400, message: 'user name or password invalid' });
  let isValid = await bcrypt.compare(password, user.hashPass);
  console.log('is Valid?', isValid);
  if (isValid) {
    delete user.hashPass;
    const timeIssued = Math.floor(Date.now() / 1000);
    const timeExpires = timeIssued + 3600; // 1 hour
    // const timeExpires = timeIssued + 86400 * 28; // 28 days
    const token = await jwt.sign(
      {
        iss: 'teachgiving',
        aud: 'teachgiving',
        iat: timeIssued,
        exp: timeExpires,
        identity: user.id,
      },
      'secret'
    );
    return res
      .set({ authentication: token })
      .status(200)
      .json(user);
  }
  return res
    .status(400)
    .json({ status: 400, message: 'user name or password invalid' });
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
  login,
  createUser,
  updateUser,
  deleteUserById,
};
