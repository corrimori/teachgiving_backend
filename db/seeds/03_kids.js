exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kids')
    .del()
    .then(function() {
      return knex('kids').insert([
        {
          id: 1,
          name: 'Betty',
          user_id: 1,
          avatarImage: 'panda.png',
          runningTotal: 0,
        },
        {
          id: 2,
          name: 'Veronica',
          user_id: 4,
          avatarImage: 'fox.png',
          runningTotal: 0,
        },
        {
          id: 3,
          name: 'Jughead',
          user_id: 3,
          avatarImage: 'koala.png',
          runningTotal: 0,
        },
        {
          id: 4,
          name: 'Archie',
          user_id: 3,
          avatarImage: 'panda.png',
          runningTotal: 0,
        },
        {
          id: 5,
          name: 'Moose',
          user_id: 2,
          avatarImage: 'koala.png',
          runningTotal: 0,
        },
        {
          id: 6,
          name: 'Midge',
          user_id: 1,
          avatarImage: 'panda.png',
          runningTotal: 0,
        },
        {
          id: 7,
          name: 'Reggie',
          user_id: 2,
          avatarImage: 'wolf.png',
          runningTotal: 0,
        },
      ]);
    });
};
