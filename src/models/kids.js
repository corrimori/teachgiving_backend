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

module.exports = {
  getAllKids,
  getKidById,
  // getKidWithNestedTags,
  // createKid,
  // updateKid,
  // deleteKidById,
};
