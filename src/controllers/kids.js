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

module.exports = {
  getAllKids,
  getKidById,
  // getKidWithNestedTags,
  // createKid,
  // updateKid,
  // deleteKidById,
};
