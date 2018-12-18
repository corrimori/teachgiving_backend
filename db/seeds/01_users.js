exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: 1,
          name: 'Cooper',
          hashPass:
            '$2a$10$tbInC/WzOEn4gr18XC5D3uhoFDvhcWUiDmdze1sSpjI/SS3AjtYCC',
        },
        {
          id: 2,
          name: 'Lodge',
          hashPass:
            '$2a$10$AWKknAd529.2d9yrH9cAiu95B2iJDkeoQ93B.tumqo.eWE3.w91sm',
        },
        {
          id: 3,
          name: 'Jones',
          hashPass:
            '$2a$10$bw2hib03nkHzvhmkSgNaoOmqoYgQ55Y0TYvtuYCACY2FFUsXkJUte',
        },
        {
          id: 4,
          name: 'Andrews',
          hashPass:
            '$2a$10$EJg7TQVclL933FQt6Cj/X.wFHDScxV.klOogW6TaLmEJ3SywKMbAO',
        },
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
      )
    );
};
