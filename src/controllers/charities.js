const model = require('../models/charities');

getAllCharities = (req, res, next) => {
  let promise = model.getAllCharities();

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

getCharityById = (req, res, next) => {
  let id = req.params.id;
  let promise = model.getCharityById(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

createCharity = (req, res, next) => {
  console.log(req.body);
  let promise = model.createCharity(req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

updateCharity = (req, res, next) => {
  let id = req.params.id;
  let promise = model.updateCharity(id, req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

deleteCharityById = (req, res, next) => {
  let id = req.params.id;
  let promise = model.deleteCharityById(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

module.exports = {
  getAllCharities,
  getCharityById,
  createCharity,
  updateCharity,
  deleteCharityById,
};
