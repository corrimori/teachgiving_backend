
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, avatarImage: '/images/wolf.png'},
        {id: 2, avatarImage: '/images/panda.png'},
        {id: 3, avatarImage: '/images/koala.png'},
        {id: 4, avatarImage: '/images/fox.png'}
      ]);
    });
};
