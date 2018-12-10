const knex = require('./db');

getAllKids = () => {
  return knex('kids').orderBy('name', 'ASC');
};

getKidById = id => {
  return knex('kids').where('id', id);
};

module.exports = {
  getAllKids,
  getKidById,
  // createKid,
  // updateKid,
  // deleteKidById,
};
