const kidsQuery = require('../../queries/kids');

const getAllKids = () => {
  kids = kidsQuery.getAllKids();

  return kids.then(result => {
    return result.length < 1
      ? { error: 'error retreiving kids', status: 404 }
      : result;
  });
};

const getKidById = id => {
  kid = kidsQuery.getKidById(id);

  return kid.then(result => {
    return !result ? { error: 'error retreiving kid', status: 404 } : result;
  });
};

const getPledgesForKid = (id, body) => {
  console.log('here in get pledges for kid ...');
  kid = kidsQuery.getPledgesForKid(id, body);

  return kid.then(result => {
    return !result
      ? { error: 'error retreiving pledges for kid', status: 404 }
      : result;
  });
};

const createKid = body => {
  console.log('body>>', body);
  kid = kidsQuery.createKid(body);

  return kid.then(result => {
    return !result ? { error: 'error creating kid', status: 500 } : result;
  });
};

const updateKid = (id, body) => {
  kid = kidsQuery.updateKid(id, body);

  return kid.then(result => {
    return !result ? { error: 'error updating kid', status: 500 } : result;
  });
};

const deleteKidById = id => {
  kid = kidsQuery.deleteKidById(id);

  return kid.then(result => {
    return !result ? { error: 'error deleting kid', status: 500 } : result;
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
