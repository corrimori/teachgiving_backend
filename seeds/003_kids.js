
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kids').del()
    .then(function () {
      return knex('kids').insert([
        {id: 1, name: 'Betty', users_id: 1, avatars_id: 4, runningTotal: 0},
        {id: 2, name: 'Veronica', users_id: 4, avatars_id: 2, runningTotal: 0},
        {id: 3, name: 'Jughead', users_id: 2, avatars_id: 1, runningTotal: 0},
        {id: 4, name: 'Archie', users_id: 3, avatars_id: 3, runningTotal: 0}
      ]);
    });
};
