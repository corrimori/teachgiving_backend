const avatarsQuery = require('../../queries/avatars');

const getAllAvatars = () => {
  avatars = avatarsQuery.getAllAvatars();

  return avatars.then(result => {
    return result.length < 1
      ? { error: 'error retrieving avatars', status: 404 }
      : result;
  });
};

const getAvatarById = id => {
  avatar = avatarsQuery.getAvatarById(id);

  return avatar.then(result => {
    return !result ? { error: 'error retrieving avatar', status: 404 } : result;
  });
};

module.exports = {
  getAllAvatars,
  getAvatarById,
};
