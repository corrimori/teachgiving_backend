const model = require('../models/kids');

getAllKids = (req, res, next) => {
  let promise = model.getAllKids();

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

getKidById = (req, res, next) => {
  let id = req.params.id;
  let promise = model.getKidById(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

getPledgesForKid = (req, res, next) => {
  let id = req.params.id;
  let promise = model.getPledgesForKid(id, req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

createKid = (req, res, next) => {
  console.log(req.body);
  let promise = model.createKid(req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

updateKid = (req, res, next) => {
  let id = req.params.id;
  let promise = model.updateKid(id, req.body);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

deleteKidById = (req, res, next) => {
  let id = req.params.id;
  let promise = model.deleteKidById(id);

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result);
  });

  promise.catch(error => {
    next(error);
  });
};

module.exports = {
  getAllKids,
  getKidById,
  getPledgesForKid,
  createKid,
  updateKid,
  deleteKidById,
};
