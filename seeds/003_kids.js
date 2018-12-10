exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kids')
    .del()
    .then(function() {
      return knex('kids').insert([
        { id: 1, name: 'Betty', user_id: 1, avatar_id: 4, runningTotal: 0 },
        { id: 2, name: 'Veronica', user_id: 4, avatar_id: 2, runningTotal: 0 },
        { id: 3, name: 'Jughead', user_id: 2, avatar_id: 1, runningTotal: 0 },
        { id: 4, name: 'Archie', user_id: 3, avatar_id: 3, runningTotal: 0 },
      ]);
    });
};
