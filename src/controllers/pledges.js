const model = require('../models/pledges');

getPledges = (req, res, next) => {
  console.log('in pledge controllers...');
  let promise = model.getPledges();

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

createPledge = (req, res, next) => {
  console.log(req.body);
  let promise = model.createPledge(req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

updatePledge = (req, res, next) => {
  let id = req.params.id;
  let promise = model.updatePledge(id, req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

deletePledge = (req, res, next) => {
  let id = req.params.id;
  let promise = model.deletePledge(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

module.exports = {
  getPledges,
  createPledge,
  updatePledge,
  deletePledge,
};
