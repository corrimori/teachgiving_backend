
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, name: 'ccooper', password: '00A00001'},
        {id: 2, name: 'hlodge', password: '000B0002'},
        {id: 3, name: 'jjones', password: '12345678'}
        {id: 4, name: 'fandrews', password: '87654E21'}
      ]);
    });
};
