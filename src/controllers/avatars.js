const model = require('../models/avatars');

getAllAvatars = (req, res, next) => {
  let promise = model.getAllAvatars();

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

getAvatarById = (req, res, next) => {
  let id = req.params.id;
  let promise = model.getAvatarById(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

module.exports = {
  getAllAvatars,
  getAvatarById,
};
