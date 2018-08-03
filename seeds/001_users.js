
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'bcooper', password: '00A00001'},
        {id: 2, name: 'vlodge', password: '000B0002'},
        {id: 3, name: 'jjones', password: '12345678'}
        {id: 4, name: 'aandrews', password: '87654E21'}
      ]);
    });
};
