exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        { id: 1, name: 'Cooper', hashPass: '00A00001' },
        { id: 2, name: 'Lodge', hashPass: '000B0002' },
        { id: 3, name: 'Jones', hashPass: '12345678' },
        { id: 4, name: 'Andrews', hashPass: '87654E21' },
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
      )
    );
};
