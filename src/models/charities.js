const charitiesQuery = require('../../queries/charities');

const getAllCharities = () => {
  charities = charitiesQuery.getAllCharities();

  return charities.then(result => {
    return result.length < 1
      ? { error: 'error retrieving charities', status: 404 }
      : result;
  });
};

const getCharityById = id => {
  charity = charitiesQuery.getCharityById(id);

  return charity.then(result => {
    return !result
      ? { error: 'error retrieving charity', status: 404 }
      : result;
  });
};

const createCharities = body => {
  console.log('body>>', body);
  charity = charitiesQuery.createCharities(body);

  return charity.then(result => {
    return !result ? { error: 'error creating charity', status: 500 } : result;
  });
};

const updateCharity = (id, body) => {
  charity = charitiesQuery.updateCharity(id, body);

  return charity.then(result => {
    return !result ? { error: 'error updating charity', status: 500 } : result;
  });
};

const deleteCharityById = id => {
  charity = charitiesQuery.deleteCharityById(id);

  return charity.then(result => {
    return !result ? { error: 'error deleting charity', status: 500 } : result;
  });
};

module.exports = {
  getAllCharities,
  getCharityById,
  createCharity,
  updateCharity,
  deleteCharityById,
};
