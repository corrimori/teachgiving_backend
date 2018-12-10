const knex = require('./db');

getAllAvatars = () => {
  return knex('avatars');
};

getAvatarById = id => {
  return knex('avatars').where('id', id);
};

module.exports = {
  getAllAvatars,
  getAvatarById,
};
