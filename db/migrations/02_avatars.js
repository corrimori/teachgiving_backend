exports.up = function(knex, Promise) {
  return knex.schema.createTable('avatars', table => {
    table.increments();
    table.string('avatarImage');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('avatars');
};
