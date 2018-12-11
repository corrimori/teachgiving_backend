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

// get all pledges from a charity with id
// const getPledges = (req, res, next) => {
//   //de-structure req.params for specified restaurantsId
//   let { charityId } = req.params;
//   let promise = model.getPledges(charityId);

// getAllCharities = (req, res, next) => {
//   let promise = model.getAllCharities();
//
//   promise.then(result => {
//     return result.error ? next(result) : res.status(200).json(result);
//   });
//
//   promise.catch(error => {
//     next(error);
//   });
// };

module.exports = {
  getPledges,
};
