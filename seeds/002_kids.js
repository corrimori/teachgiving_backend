
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kids').del()
    .then(function () {
      return knex('kids').insert([
        {id: 1, name: 'Betty', user_id: '1'},
        {id: 2, name: 'Veronica', user_id: '4'},
        {id: 3, name: 'Jughead', user_id: '2'}
        {id: 4, name: 'Archie', user_id: '3'}
      ]);
    });
};
