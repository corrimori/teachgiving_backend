
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('avatars').del()
    .then(function () {
      // Inserts seed entries
      return knex('avatars').insert([
        {id: 1, avatarImage: 'imageswolf.png'},
        {id: 2, avatarImage: 'imagespanda.png'},
        {id: 3, avatarImage: 'imageskoala.png'},
        {id: 4, avatarImage: 'imagesfox.png'}
      ]);
    });
};
